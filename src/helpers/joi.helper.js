const Joi = require('joi');
let { commonErrorRes } = require("../middlewares/response.middleware");

// Main method to validate values
async function validate(req, res, key, next) {
    const schema = Joi.object(key);

    const options = {
        abortEarly: true,
        allowUnknown: true,
        stripUnknown: false
    };
    let dataType = { ...req.body, ...req.params };
    const { error, value } = schema.validate(dataType, options);

    if (error) {
        commonErrorRes(res, { statusCode: 406, message: error.details[0].message });
    } else {
        req.body = req.body || {};
        req.params = req.params || {};
        next();
    }
};


// Common & reuseable methods
exports.emailParam = async (req, res, next) => {
    let key = {
        email: Joi.string().email().required()
    }
    return validate(req, res, key, next);
};

exports.idParam = async (req, res, next) => {
    let key = {
        id: Joi.string().guid().required()
    }
    return validate(req, res, key, next);
};

exports.signUp = async (req, res, next) => {
    let key = {
        email: Joi.string().email().required(),
        firstName: Joi.string().required()
    }
    return validate(req, res, key, next);
};

exports.user = async (req, res, next) => {
    let key = {
        email: Joi.string().email().required(),
        username: Joi.string().required(),
        contactNumber: Joi.number().required(),
        designation: Joi.string().required()

    }
    return validate(req, res, key, next);
};
