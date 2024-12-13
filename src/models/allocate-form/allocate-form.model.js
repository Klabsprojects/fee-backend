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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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

      //Account IV - Maintenance
      //a) Campus Maintenance
      account4aGardeningExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aGardeningAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aGardeningReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4aSweepingExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aSweepingAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aSweepingReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4aSanitationExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aSanitationAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aSanitationReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4aSecurityServicesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aSecurityServicesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4aSecurityServicesReason: {
        type: DataTypes.TEXT,
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

      //b) Laboratory Maintenance
      account4bScienceLabExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bScienceLabAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bScienceLabReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4bLanguageLabExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bLanguageLabAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bLanguageLabReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4bComputerLabExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bComputerLabAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bComputerLabReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4bDigitalLibraryLabExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bDigitalLibraryLabAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4bDigitalLibraryLabReason: {
        type: DataTypes.TEXT,
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

      //c) Equipment Maintenance

      account4cXeroxExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4cXeroxAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4cXeroxReason: {
        type: DataTypes.TEXT,
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

      //d) Maintenance Expenditures Electrical and other Machines
      account4dElectricLinesExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dElectricLinesAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dElectricLinesReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4dGeneratorExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dGeneratorAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dGeneratorReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4dFireExtinguisherExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dFireExtinguisherAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dFireExtinguisherReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4dAirConditionerExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dAirConditionerAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4dAirConditionerReason: {
        type: DataTypes.TEXT,
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

      //e) Building Maintenance
      account4eColourWashExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eColourWashAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eColourWashReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4eRepairsExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eRepairsAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eRepairsReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4eLeaseExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eLeaseAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eLeaseReason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      account4eDepreciationExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eDepreciationAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account4eDepreciationReason: {
        type: DataTypes.TEXT,
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

      //e) Building Maintenance
      account5FurnitureExpenditure: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5FurnitureAllowed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account5FurnitureReason: {
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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

      //Account VI- Futuristic Development
      account6DevelopmentFundPercentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account6DevelopmentFundAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      account6MinorityPercentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account6MinorityAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      account6InfrastructurePercentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account6InfrastructureAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      account6UnexpectedExpendituresPercentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account6UnexpectedExpendituresAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      account6NumberOfChildren: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account6MeanValue: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      account6Total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      account1to6Total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      //Calculation form
      currentYearLkgStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearLkgFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearLkgIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearUkgStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearUkgFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearUkgIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearFirstStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearFirstFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearFirstIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearSecondStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearSecondFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearSecondIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearThirdStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearThirdFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearThirdIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearFourStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearFourFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearFourIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearFiveStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearFiveFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearFiveIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearSixStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearSixFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearSixIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearSevenStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearSevenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearSevenIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearEightStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearEightFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearEightIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearNineStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearNineFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearNineIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearTenStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearTenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearTenIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearElevenStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearElevenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearElevenIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearTwelveStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearTwelveFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearTwelveIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currentYearTotalIncome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearTotalExpenses: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currentYearDifference: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1LkgFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2LkgFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1UkgFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2UkgFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1FirstFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2FirstFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1SecondFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2SecondFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1ThirdFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2ThirdFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1FourFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2FourFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1FiveFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2FiveFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1SixFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2SixFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1SevenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2SevenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1EightFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2EightFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1NineFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2NineFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1TenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2TenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1ElevenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2ElevenFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      futureYear1TwelveFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      futureYear2TwelveFee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      proposedFeeLkg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeLkg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeUkg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeUkg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      

      proposedFeeFirst: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeFirst: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeSecond: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeSecond: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeThird: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeThird: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      proposedFeeFour: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeFour: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeFive: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeFive: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeSix: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeSix: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      proposedFeeSeven: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeSeven: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeEight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeEight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeNine: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeNine: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      proposedFeeTen: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeTen: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeEleven: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeEleven: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      proposedFeeTwelve: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      previousOrderFeeTwelve: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      AttendedBy: {
        type: DataTypes.TEXT,
        allowNull: true
      },

      account1: {
        type: DataTypes.TEXT,
        defaultValue: 'Pending'
      },
      account2: {
        type: DataTypes.TEXT,
        defaultValue: 'Pending'
      },
      account3: {
        type: DataTypes.TEXT,
        defaultValue: 'Pending'
      },
      account4: {
        type: DataTypes.TEXT,
        defaultValue: 'Pending'
      },
      account5: {
        type: DataTypes.TEXT,
        defaultValue: 'Pending'
      },
      account6: {
        type: DataTypes.TEXT,
        defaultValue: 'Pending'
      },
      account7: {
        type: DataTypes.TEXT,
        defaultValue: 'Pending'
      },
      status: {
        type: DataTypes.TEXT,
        defaultValue: 'Pending'
      },
    },
    );
    return AllocateForm;
  };