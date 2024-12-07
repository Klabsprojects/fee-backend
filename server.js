
const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const app = express();
const db = require('./utils/sequelize.db');
const routes = require('./src/routes/index.route');
const { CONSTANTS } = require('./utils/constants');
const { verifyToken } = require('./src/helpers/jwt.helper');
var morgan = require('morgan');

const port = process.env.PORT;

process.setMaxListeners(0);
process.on('uncaughtException', error => {
    console.log('Uncaught Exception Error', error);
});
process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection Error', error);
});


// sequalize sync
db.sequelize.sync({ alter: true }).then(() => {
    console.log("DB connected.");
});

app.use(express.urlencoded({ limit: "2mb", extended: true }));
app.use(express.json({ limit: "3mb" }));

app.use(cors());
app.use(morgan('combined'));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(__dirname + '/view'));
app.get('/home/', function (req, res) {
    res.sendFile(path.join(__dirname, '/view/', 'index.html'));
});

 /*app.use(verifyToken.unless({
     path: CONSTANTS.JWT_NOT_REQUIRED
 }));*/

app.use('/api/', routes);

let server = app.listen(port, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('App listening at ', host, port);
});

module.exports = { server, db };
