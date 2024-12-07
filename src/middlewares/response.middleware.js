const logger = require('../../utils/logger');

let successRes = function successValue(res, results, message) {
    return res.status(200).send({ status: 200, results: results, message: message });
};

let successResCount = function successValue(res, count, results, message) {
    return res.status(200).send({ status: 200, count: count, results: results, message: message });
};

let successResCourseAnalysis = function successValue(res, surveyList, courseAnalysisArray, message) {
    return res.status(200).send({ status: 200, surveyList: surveyList, courseAnalysisArray: courseAnalysisArray, message: message });
};
let successResEntranceExamAnalysis = function successValue(res, surveyList, examAnalysisArray, message) {
    return res.status(200).send({ status: 200, surveyList: surveyList, examAnalysisArray: examAnalysisArray, message: message });
};

let successResGovtSchemesAnalysis = function successValue(res, surveyList, govtSchemesAnalysisArray, message) {
    return res.status(200).send({ status: 200, surveyList: surveyList, govtSchemesAnalysisArray: govtSchemesAnalysisArray, message: message });
};

let successResGovtSchemesWithFilterAnalysis = function successValue(res, specialArray, govtSchemesAnalysisArray, message) {
    return res.status(200).send({ status: 200, surveyList: specialArray, govtSchemesAnalysisArray: govtSchemesAnalysisArray, message: message });
};

let successResDocumentChecklistWithFilterAnalysis = function successValue(res, specialArray, documentChecklistAnalysisArray, message) {
    return res.status(200).send({ status: 200, surveyList: specialArray, documentChecklistAnalysisArray: documentChecklistAnalysisArray, message: message });
};

let successResDocumentChecklistAnalysis = function successValue(res, surveyList, documentChecklistAnalysisArray, message) {
    return res.status(200).send({ status: 200, surveyList: surveyList, documentChecklistAnalysisArray: documentChecklistAnalysisArray, message: message });
};

let errorRes = function errorValue(res, error, message, file) {
    logger.log('error', error, message, file);
    return res.status(400).send({ status: 400, message: message });

};

let customSuccessRes = function successValue(res, results, message) {
    return res.status(200).send({ status: 405, results: results, message: "Created Failure" });
};

let commonSuccessRes = function successValue(res, success) {
    return res.status(success.statusCode).send({ status: success.statusCode, message: success.message, results: success.results });
}

let commonErrorRes = function errorValue(res, errors) {
    return res.status(errors.statusCode).send({ status: errors.statusCode, message: errors.message });
}

module.exports = { successRes, errorRes, commonErrorRes, commonSuccessRes,customSuccessRes, successResCount, successResCourseAnalysis, successResEntranceExamAnalysis, successResGovtSchemesAnalysis, successResDocumentChecklistAnalysis, successResGovtSchemesWithFilterAnalysis, successResDocumentChecklistWithFilterAnalysis };