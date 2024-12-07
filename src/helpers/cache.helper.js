let apicache = require('apicache');

let cache = apicache.options({
    debug: false,
    defaultDuration: '3 minutes',
    enabled: true,
    statusCodes: {
        exclude: [400],
        include: [200],
    }
}).middleware


module.exports = { cache }