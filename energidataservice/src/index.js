
// Base URLs
const BASE_URL = "https://api.energidataservice.dk"
const BASE_URL_DATASET = `${BASE_URL}/dataset`


// Dataset endpoints
const ENDPOINT_AFRRRESERVESDK1_DATA = `${BASE_URL_DATASET}/AfrrReservesDK1` // aFRR - DK1 Skagerak - no longer updated
const ENDPOINT_AVAILCAPFORPRODPRSTATION_DATA = `${BASE_URL_DATASET}/AvailCapForProdPrStation` // Available capacity for new production per station 
const ENDPOINT_CALORIFICVALUES_DATA = `${BASE_URL_DATASET}/CalorificValues` // Monthly allocated calorific values
const ENDPOINT_CAPACITYAUCTION_DATA = `${BASE_URL_DATASET}/CapacityAuction` // Auction of Capacities, PTR Germany
const ENDPOINT_CAPACITYAUCTIONDK1_DATA = `${BASE_URL_DATASET}/CapacityauctionDK1` // Auction of Capacities, PTR DK1-Germany
const ENDPOINT_CAPACITYAUCTIONDK2_DATA = `${BASE_URL_DATASET}/CapacityauctionDK2` // Auction of Capacities, PTR DK2-Germany
const ENDPOINT_CAPACITYPERMUNICIPALITY_DATA = `${BASE_URL_DATASET}/CapacityPerMunicipality` // Capacity Per Municipality
const ENDPOINT_CHARGEGROUPYEAR_DATA = `${BASE_URL_DATASET}/ChargeGroupYear` // Charge Group
const ENDPOINT_CO2EMIS_DATA = `${BASE_URL_DATASET}/CO2Emis` // CO2 Emission
const ENDPOINT_CO2EMISPROG_DATA = `${BASE_URL_DATASET}/CO2EmisProg` // CO2 Emission Prognosis
const ENDPOINT_COMMUNITYPRODUCTION_DATA = `${BASE_URL_DATASET}/CommunityProduction` // Production per Municipality
const ENDPOINT_CONNECTIONPOINTSINGRID_DATA = `${BASE_URL_DATASET}/ConnectionPointsInGrid` // Connection points in the electricity grid
const ENDPOINT_CONSCOVERAGEPRCOUNTYLONG_DATA = `${BASE_URL_DATASET}/ConsCoveragePrCountyLong` // Consumption coverage per municipality long term
const ENDPOINT_CONSCOVERAGEPRCOUNTYSHORT_DATA = `${BASE_URL_DATASET}/ConsCoveragePrCountyShort` // Consumption coverage per municipality short term
const ENDPOINT_CONSUMPTIONDE35HOUR_DATA = `${BASE_URL_DATASET}/ConsumptionDE35Hour` // Consumption per DE35 Industry Code per Hour
const ENDPOINT_CONSUMPTIONDK10_DATA = `${BASE_URL_DATASET}/ConsumptionDK10` // Consumption per DK10 Industry Code, municipality and year
const ENDPOINT_CONSUMPTIONDK3619CODEHOUR_DATA = `${BASE_URL_DATASET}/ConsumptionDK3619codehour` // Consumption per DK36/DK19 Industry Code per hour
const ENDPOINT_CONSUMPTIONINDUSTRY_DATA = `${BASE_URL_DATASET}/ConsumptionIndustry` // Consumption per industry, public and private, municipality and hour
const ENDPOINT_CONSUMPTIONPERGRIDAREA_DATA = `${BASE_URL_DATASET}/ConsumptionPerGridarea` // Consumption per Grid Area
const ENDPOINT_CONSUMPTIONPERMUNICIPALITYDE35_DATA = `${BASE_URL_DATASET}/ConsumptionpermunicipalityDE35` // Consumption per Municipality and DE35 industry codes
const ENDPOINT_DATAHUBMEASURINGPOINTSTATISTICS_DATA = `${BASE_URL_DATASET}/DatahubMeasuringPointStatistics` // Datahub Measuring Point Statistics
const ENDPOINT_DATAHUBPRICELIST_DATA = `${BASE_URL_DATASET}/DatahubPricelist` // Datahub Price List
const ENDPOINT_DECLARATIONCOVERAGEHOUR_DATA = `${BASE_URL_DATASET}/DeclarationCoverageHour` // Declaration, Consumption coverage per Hour
const ENDPOINT_DECLARATIONEMISSIONHOUR_DATA = `${BASE_URL_DATASET}/DeclarationEmissionHour` // Declaration, Emission per Hour
const ENDPOINT_DECLARATIONPRODUCTION_DATA = `${BASE_URL_DATASET}/DeclarationProduction` // Declaration, Production types and Emissions per Hour
const ENDPOINT_DECLARATIONPRODUCTIONTYPESHOUR_DATA = `${BASE_URL_DATASET}/DeclarationProductionTypesHour` // Declaration, Production types per Hour, EXPIRED
const ENDPOINT_DECLARATIONPRODUCTIONVERSION_DATA = `${BASE_URL_DATASET}/DeclarationProductionVersion` // Declaration, Production types and Emissions per Hour, versions
const ENDPOINT_ELECTRICITYBALANCENONV_DATA = `${BASE_URL_DATASET}/ElectricityBalanceNonv` // Electricity Balance Non-Validated\r\n
const ENDPOINT_ELECTRICITYPRODEX5MINREALTIME_DATA = `${BASE_URL_DATASET}/ElectricityProdex5MinRealtime` // Electricity Production and Exchange 5 min Realtime
const ENDPOINT_ELECTRICITYSUPPLIERSPERGRIDAREA_DATA = `${BASE_URL_DATASET}/ElectricitySuppliersPerGridarea` // Active Electricity Suppliers per Grid Area
const ENDPOINT_ELSPOTPRICES_DATA = `${BASE_URL_DATASET}/Elspotprices` // Elspot Prices
const ENDPOINT_ENERGYSURPLUSPRSTATIONLONG_DATA = `${BASE_URL_DATASET}/EnergySurplusPrStationLong` // Energy surplus per TSO-station long term
const ENDPOINT_ENERGYSURPLUSPRSTATIONSHORT_DATA = `${BASE_URL_DATASET}/EnergySurplusPrStationShort` // Energy surplus per TSO-station short term
const ENDPOINT_ENTRYEXITGASQUALITY_DATA = `${BASE_URL_DATASET}/EntryExitGasquality` // Entry/Exit gas quality
const ENDPOINT_FCRRESERVESDK1_DATA = `${BASE_URL_DATASET}/FcrReservesDK1` // FCR, Frequency Containment Reserves, DK1  (until January 2021)
const ENDPOINT_FCRRESERVESDK2_DATA = `${BASE_URL_DATASET}/FcrReservesDK2` // FCR, Frequency Containment Reserves, DK2
const ENDPOINT_FFRDEMANDDK2_DATA = `${BASE_URL_DATASET}/FFRdemandDK2` // FFR, Fast Frequency Reserve, demand DK2
const ENDPOINT_FFRPURCHASEDDK2_DATA = `${BASE_URL_DATASET}/FFRpurchasedDK2` // FFR, Fast Frequency Reserve, purchased DK2
const ENDPOINT_FIXEDRESIDUALCONSUMPTION_DATA = `${BASE_URL_DATASET}/FixedResidualConsumption` // Fixed Residual Consumption
const ENDPOINT_FORECASTS_5MIN_DATA = `${BASE_URL_DATASET}/Forecasts_5Min` // Forecast Wind and Solar power, 5min
const ENDPOINT_FORECASTS_HOUR_DATA = `${BASE_URL_DATASET}/Forecasts_Hour` // Forecast Wind and Solar power, hour resolution
const ENDPOINT_FOREIGNEXCHANGE_DATA = `${BASE_URL_DATASET}/ForeignExchange` // Foreign exchange
const ENDPOINT_GASCOMPOSITION_DATA = `${BASE_URL_DATASET}/GasComposition` // Gas composition and quality for transmission 
const ENDPOINT_GASCOMPOSITIONMONTHLY_DATA = `${BASE_URL_DATASET}/GasCompositionMonthly` // Gas composition and quality for transmission, monthly
const ENDPOINT_GASCOMPOSITIONYEARLY_DATA = `${BASE_URL_DATASET}/GasCompositionYearly` // Gas composition and quality for transmission, yearly
const ENDPOINT_GASFLOW_DATA = `${BASE_URL_DATASET}/Gasflow` // Commercial gas amounts
const ENDPOINT_GASSYSTEMRIGHTNOW_DATA = `${BASE_URL_DATASET}/GasSystemRightNow` // Gas System Right Now
const ENDPOINT_HERFINDAHLHIRSCHMANINDEXHHIPERGRIDAREA_DATA = `${BASE_URL_DATASET}/HerfindahlHirschmanIndexHHIPerGridarea` // Herfindahl - Hirschman Index (HHI) per Grid Area
const ENDPOINT_INDUSTRYCODES_DE35_DATA = `${BASE_URL_DATASET}/Industrycodes_DE35` // Industry codes, DE35
const ENDPOINT_INERTIANORDICSYNCHAREA_DATA = `${BASE_URL_DATASET}/InertiaNordicSyncharea` // Inertia, Nordic Synchronous Area
const ENDPOINT_MFRRRESERVESDK1_DATA = `${BASE_URL_DATASET}/MfrrReservesDK1` // mFRR, Frequency Restoration Reserves manual, DK1
const ENDPOINT_MFRRRESERVESDK2_DATA = `${BASE_URL_DATASET}/MfrrReservesDK2` // mFRR, Frequency Restoration Reserves manual, DK2
const ENDPOINT_MRSTATIONSGASQUALITY_DATA = `${BASE_URL_DATASET}/MrStationsGasquality` // Gas quality for MR stations
const ENDPOINT_NORDPOOLMARKET_DATA = `${BASE_URL_DATASET}/NordpoolMarket` // Nordpool Market (will expire, please read description)
const ENDPOINT_POWERSUPPLIERCHANGEPERGRIDAREA_DATA = `${BASE_URL_DATASET}/PowerSupplierChangePerGridarea` // Change of Electricity Suppliers Per Grid Area
const ENDPOINT_POWERSYSTEMRIGHTNOW_DATA = `${BASE_URL_DATASET}/PowerSystemRightNow` // Power System Right Now
const ENDPOINT_PRIVINDUSTRYCONSUMPTIONHOUR_DATA = `${BASE_URL_DATASET}/PrivIndustryConsumptionHour` // Private consumption per housing and heating categories and industry consumption by municipality and hour
const ENDPOINT_PRODUCTIONCONSUMPTIONSETTLEMENT_DATA = `${BASE_URL_DATASET}/ProductionConsumptionSettlement` // Production and Consumption - Settlement
const ENDPOINT_PRODUCTIONMUNICIPALITYHOUR_DATA = `${BASE_URL_DATASET}/ProductionMunicipalityHour` // Production per Municipality per Hour
const ENDPOINT_REALTIMEMARKET_DATA = `${BASE_URL_DATASET}/RealtimeMarket` // Realtime Market
const ENDPOINT_STORAGEAVAILABLEPCT_DATA = `${BASE_URL_DATASET}/StorageAvailablePct` // Storage expected availability
const ENDPOINT_STORAGECAPACITY_DATA = `${BASE_URL_DATASET}/StorageCapacity` // Storage available capacity
const ENDPOINT_STORAGENOMINATION_DATA = `${BASE_URL_DATASET}/StorageNomination` // Storage hourly nomination
const ENDPOINT_STORAGEUTILIZATION_DATA = `${BASE_URL_DATASET}/StorageUtilization` // Storage utilization
const ENDPOINT_TRANSMISSIONLINES_DATA = `${BASE_URL_DATASET}/Transmissionlines` // Transmission Lines



queryBuilder = function(url, params) {
    return `${url}?${new URLSearchParams(params).toString()}`
}


exports.Elspotprices = async function(params) {
    const res = await fetch(queryBuilder(ENDPOINT_ELSPOTPRICES_DATA, params).toString(), {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return res.json()
}


exports.DeclarationProduction = async function(params) {
    const res = await fetch(queryBuilder(ENDPOINT_DECLARATIONPRODUCTION_DATA, params).toString(), {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return res.json()
}