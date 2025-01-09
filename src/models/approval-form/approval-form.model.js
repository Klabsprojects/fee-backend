var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const ApprovalForm = sequelize.define("approvalform", {
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

      
      status: {
        type: DataTypes.ENUM({
          values: ['Pending', 'Approved', 'Objection', 'Completed']
        }),
        defaultValue: 'Pending'
      },
      filepath: {
        type: DataTypes.STRING,
      },
    },
    );
    return ApprovalForm;
  };