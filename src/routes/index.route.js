const app = require('express')();
require("./login/login.route")(app);
require("./fee-form/fee-form.route")(app);
require("./allocate-form/allocate-form.route")(app);
module.exports = app;