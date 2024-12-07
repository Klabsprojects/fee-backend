const axios = require('axios');

exports.external_get = async (request) => {
    const response = await axios({
        method: request.method,
        url: request.url,
        headers: { 'Authorization': request.authHeader },
        data: request.data
    })
    return response.data;
}