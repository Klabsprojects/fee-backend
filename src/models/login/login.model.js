const { DATE, TIME } = require("sequelize");
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define("login", {
      userType: {
        type: DataTypes.ENUM({
          values: ['Report', 'Section', 'Admin', 'Entry']
        }),
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: /^[0-9a-zA-Z]+$/,  // Regular expression to allow only alphanumeric characters
          len: [1, 255],  // Optional: Set length validation if needed
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z0-9$./]*$/,  // Allow alphanumeric, $, and ./ characters (used in bcrypt hashes)
        }
      },
    },
    );
    return Login;
  };