const auth = require('simple-oauth2');
const jwt = require('jsonwebtoken');

const API_CUSTOMER_TYPE = "customerapi"
const API_THIRDPARTY_TYPE = "thirdpartyapi"

const BASE_URL = "https://api.eloverblik.dk"

const ENDPOINT_CUSTOMER_TOKEN = `${BASE_URL}/${API_CUSTOMER_TYPE}/api/1/token`
const ENDPOINT_CUSTOMER_METERINGPOINTS = `${BASE_URL}/${API_CUSTOMER_TYPE}/api/1/meteringpoints/meteringpoints`
const ENDPOINT_CUSTOMER_TIMESERIES = `${BASE_URL}/${API_CUSTOMER_TYPE}/api/1/meterdata/gettimeseries`



class Eloverblik {
    #refreshToken;
    #accessToken;
    #baseUrl;
    
    constructor(refreshToken) {
        var decodedToken = jwt.decode(refreshToken)

        // verify token is a jwt
        if (decodedToken == undefined && decodedToken == null)
            throw new Error("Invalid token!")

        // verify token is a refresh token (and not e.g. data access)
        if (decodedToken.hasOwnProperty('tokenType'))
            if (decodedToken.tokenType.split('_')[1] !== "Refresh")
                throw new Error("Token is not a refresh token!")
        
        this.#refreshToken = refreshToken;
    }


    async #getAccessToken() {
          
        // reuse access token if it is not exipred
        if (this.#accessToken != undefined || this.#accessToken != null) {
            var decodedToken = jwt.decode(this.#accessToken)
            if (decodedToken.hasOwnProperty('exp')) {
                if (+new Date() < decodedToken.exp*1000) {
                    return Promise.resolve(this.#accessToken)
                }
            }
        }
      
        // fetch new access token
        const res = await fetch(ENDPOINT_CUSTOMER_TOKEN, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${this.#refreshToken}`,
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())

        this.#accessToken = res.result

        return res.result
    }

    async getMeteringPoints(includeAll=false) {
        const token = await this.#getAccessToken()
        const res = await fetch(`${ENDPOINT_CUSTOMER_METERINGPOINTS}?${new URLSearchParams({includeAll:includeAll}).toString()}`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        return res.json()
    }

    async getTimeSeries(meterIds, from, to=+new Date(), aggregation="Hour") {
        console.log(`${ENDPOINT_CUSTOMER_TIMESERIES}/${from}/${to}/${aggregation}`)
        
        const token = await this.#getAccessToken()
        const res = await fetch(`${ENDPOINT_CUSTOMER_TIMESERIES}/${from}/${to}/${aggregation}`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                meteringPoints: {
                    meteringPoint: meterIds
                }
            })
        })
        return res.json()
    }

}


exports.Eloverblik = Eloverblik