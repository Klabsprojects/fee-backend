let { commonErrorRes } = require("../src/middlewares/response.middleware");

exports.allowCrossDomain = async (req, res, next) => {
    const origin = req.headers.host.toString();
    if (process.env.WHITELIST.indexOf(origin) !== -1) {
        return next();
    } else {
        commonErrorRes(res, { statusCode: 403, message: "Cross-Origin Request Blocked" })
    }
}

