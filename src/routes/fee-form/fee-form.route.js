module.exports = (app) => {
    const value = require("../../controllers/fee-form/fee-form.controller");
    const { joi, cache } = require("../../helpers/index.helper");
    const {  jwt, ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
    const upload = require("../../middlewares/upload")
    app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/formRegister",
    [jwt.verifyToken],
    value.register
  );

  app.get(
    "/getAllForms",
    [jwt.verifyToken],
    value.getAllForms
  )
  
  app.get(
    "/getAllFormsBySection",
    [jwt.verifyToken],
    value.getAllFormsBySection
  )

  app.put(
    "/allocateFeeForm",
    [jwt.verifyToken],
    value.allocateFeeForm
  )
  
  app.get(
    "/getPendingForms",
    [jwt.verifyToken],
    value.getPendingForms
  )

  app.get(
    "/getFormById",
    [jwt.verifyToken],
    value.getFormById
  )

  app.get(
    "/getDistricts",
    [jwt.verifyToken],
    value.getDistricts
  )

  app.get(
    "/getSchoolType",
    [jwt.verifyToken],
    value.getSchoolType
  )

}