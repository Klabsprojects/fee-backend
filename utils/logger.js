const log4js = require("log4js");

exports.log = function (level, error, message, file) {
    let date = new Date();
    let fileName = (date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()).toString();

    log4js.configure({
        appenders: { projectName: { type: 'file', filename: 'logs/' + fileName + '.log' } },
        categories: { default: { appenders: ['projectName'], level: level } }
    });
    let logger = log4js.getLogger('projectName');
    if (level === 'error') {
        logger.error(file, error)
    }
}