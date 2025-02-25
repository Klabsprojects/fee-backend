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
      schoolCategory: {
        type: DataTypes.ENUM('MC', 'NP', 'SF','CB'),  // Restricting values to 'MC' or 'PR'
        allowNull: false,
      },
      schoolId: {
        type: Sequelize.STRING,  // Use STRING for schoolId to manage custom increment
        allowNull: true,
        // We will set the schoolId dynamically during record creation
      },
      feeformSchoolId: {
        type: Sequelize.STRING,  // Use STRING for schoolId to manage custom increment
        allowNull: true,
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
      studentStrengthTotal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalNumberOfRteStudentsIndividual: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      totalNumberOfRteStudentsMultiple: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      totalNumberOfRteStudentsTotal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rteAmountSanctionedIndividual: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      rteAmountSanctionedMultiple: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      rteAmountSanctionedTotal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousFeeCommitteeOrderFeeIndividual: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      previousFeeCommitteeOrderFeeMultiple: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      previousFeeCommitteeOrderFeeTotal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      proposedFeeIndividual: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      proposedFeeMultiple: {
        type: DataTypes.JSON, // Use JSON type for storing an object
        allowNull: true,
      },
      proposedFeeTotal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      districtId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'district',
            key: 'id'
        },
        allowNull: true,
      },
      schoolTypeId: {
        type: Sequelize.UUID,
        references: {
            model: 'school',
            key: 'id'
        },
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
    //return FeeForm;

// // Hook to generate the unique number before creating the record
// FeeForm.addHook('beforeCreate', async (feeForm) => {
//   try {
//     // Log to ensure the hook is being triggered
//     console.log('beforeCreate hook triggered');

//     const districtNumber = '01'; // Example: Assuming district number is '01'
//     const matriculationCode = 'MC'; // Fixed value for "Matriculation"
//     const year = new Date().getFullYear().toString().slice(2); // Get the last two digits of the current year

//     // Ensure serial number is generated and doesn't return an empty string
//     const serialNumber = await getNextSerialNumber();

//     // Log the generated serial number
//     console.log('Generated serial number:', serialNumber);

//     if (!serialNumber) {
//       throw new Error('Failed to generate serial number');
//     }

//     // Generate the unique number
//     feeForm.unique_number = `${districtNumber}${matriculationCode}${year}${serialNumber}`;

//     // Log the generated unique_number
//     console.log('Generated unique_number:', feeForm.unique_number);

//   } catch (error) {
//     console.error('Error generating unique_number:', error);
//     throw new Error('Error generating unique_number');
//   }
// });

// // Helper function to get the next serial number
// async function getNextSerialNumber() {
//   try {
//     // Get the most recent record and extract the serial number
//     const latestRecord = await FeeForm.findOne({
//       order: [['createdAt', 'DESC']], // Get the most recent record
//     });

//     let serialNumber = 1;
//     if (latestRecord) {
//       const lastSerial = parseInt(latestRecord.unique_number.slice(6), 10); // Get the last 4 digits of the unique number
//       serialNumber = lastSerial + 1;
//     }

//     console.log('Next serial number:', serialNumber); // Debugging log

//     return serialNumber.toString().padStart(4, '0'); // Ensure the serial number is 4 digits
//   } catch (error) {
//     console.error('Error fetching latest serial number:', error);
//     throw new Error('Failed to fetch latest serial number');
//   }
// }

return FeeForm;
  };