var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define("school", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
   );
    return School;
  };