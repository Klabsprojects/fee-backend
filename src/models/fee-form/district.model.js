var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define("district", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
   );
    return District;
  };