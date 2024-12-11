var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const AllocateForm = sequelize.define("allocateform", {
      feeformId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'feeform',
            key: 'id'
        },
        allowNull: false,
      },
      allocatedTo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'login',
            key: 'id'
        },
        allowNull: true,
      },

      //ACCOUNT - I
      //A. Salary and Allowances
      account1aPrincipalPreviousExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aPrincipalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aPrincipalReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1aTeachingStaffPreviousExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aTeachingStaffAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aTeachingStaffReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1aNonTeachingStaffPreviousExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aNonTeachingStaffAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aNonTeachingStaffReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1aEpfPreviousExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aEpfAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aEpfReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1aEsiPreviousExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aEsiAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aEsiReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1aEarnedLeavePreviousExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aEarnedLeaveAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aEarnedLeaveReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1aGratuityExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aGratuityAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aGratuityReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1aPensionExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aPensionAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aPensionReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1aRetirementPurseExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aRetirementPurseAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aRetirementPurseReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      account1aTotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1aTotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      //B. Other Schemes and Benefits for the Staff
      account1bLicExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bLicAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bLicReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1bStaffUniformExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bStaffUniformAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bStaffUniformReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1bIncentiveExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bIncentiveAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bIncentiveReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1bGiftsExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bGiftsAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bGiftsReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account1bTotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1bTotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
    },
    );
    return AllocateForm;
  };