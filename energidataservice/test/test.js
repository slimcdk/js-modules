
const egs = require('../')

const data = egs.DeclarationProduction({start: 'now-P10D', end:+new Date(), limit: 101})

data.then(console.log)