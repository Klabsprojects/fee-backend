var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const FeeForm = sequelize.define("feeform", {
      formDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
	    udiseCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      schoolName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      localityType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      locality: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      correspondantOrPrincipal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      correspondantOrPrincipalName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      classesFunctioning: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      previousFeeCommitteeOrderValidityFromYear:{
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousFeeCommitteeOrderValidityToYear:{
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      authorisedPersonDesignation:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      authorisedPersonName:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobileNumber1: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      mobileNumber2: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      individualOrMultiple: {
        type: DataTypes.ENUM({
          values: ['Individual', 'Multiple']
        }),
        allowNull: false,
      },
      studentStrengthIndividual: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      studentStrengthMultiple: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      allocatedTo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'login',
            key: 'id'
        },
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
    },
    );
    return FeeForm;
  };