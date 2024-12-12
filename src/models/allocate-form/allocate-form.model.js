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

      account2ElectricityChargesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2ElectricityChargesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2ElectricityChargesReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2FuelForGeneratorExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2FuelForGeneratorAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2FuelForGeneratorReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2WaterTaxesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2WaterTaxesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2WaterTaxesReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2PropertyTaxesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2PropertyTaxesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2PropertyTaxesReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2TelephoneExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2TelephoneAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2TelephoneReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2InternetExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2InternetAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2InternetReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2PostageExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2PostageAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2PostageReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2PrintingExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2PrintingAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2PrintingReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2StationeryExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2StationeryAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2StationeryReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2ExaminationExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2ExaminationAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2ExaminationReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2BooksExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2BooksAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2BooksReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2TeachingAidsExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2TeachingAidsAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2TeachingAidsReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2SportsGamesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2SportsGamesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2SportsGamesReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2StaffWelfareExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2StaffWelfareAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2StaffWelfareReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2SpecialTrainingExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2SpecialTrainingAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2SpecialTrainingReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2RecognitionExpensesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2RecognitionExpensesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2RecognitionExpensesReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2AdministrativeTravelExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2AdministrativeTravelAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2AdministrativeTravelReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2ProfessionalFeeExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2ProfessionalFeeAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2ProfessionalFeeReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2HospitalityExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2HospitalityAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2HospitalityReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2FunctionsExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2FunctionsAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2FunctionsReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2AdvertisementForTeacherRecruitmentExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2AdvertisementForTeacherRecruitmentAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2AdvertisementForTeacherRecruitmentReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account2TotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account2TotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      //Account III - Expenses on Specific Purposes
      account3EducationTourExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3EducationTourAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3EducationTourReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account3SeminarExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3SeminarAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3SeminarReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account3GroupActivitiesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3GroupActivitiesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3GroupActivitiesReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account3MedicalExpensesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3MedicalExpensesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3MedicalExpensesReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account3TeachingThroughTechnologyExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3TeachingThroughTechnologyAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3TeachingThroughTechnologyReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account3CoCurricularExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3CoCurricularAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3CoCurricularReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account3ExtraCurricularExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3ExtraCurricularAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3ExtraCurricularReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account3TotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account3TotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      account4aTotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aTotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bTotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bTotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4cTotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4cTotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dTotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dTotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eTotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eTotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4MaintanenceGrandTotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4MaintanenceGrandTotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      account5FurnitureExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5FurnitureAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5FurnitureReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account5EquipmentExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5EquipmentAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5EquipmentReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account5LandExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5LandAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5LandReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account5NewConstructionExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5NewConstructionAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5NewConstructionReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account5ModernizationExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5ModernizationAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5ModernizationReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      account5TotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5TotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1to5TotalExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1to5TotalAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      account1: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
      account2: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
      account3: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
      account4: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
      account5: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
      account6: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
    },
    );
    return AllocateForm;
  };