const app = require('express')();
require("./login/login.route")(app);
module.exports = app;