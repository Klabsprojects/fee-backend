const db = require("../../../utils/sequelize.db");
const commonService = require("../../services/commonService");
const {  jwt, ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")
const { Login } = require("../../models/login/login.model")
const { Sequelize } = require('sequelize');

const bcrypt = require('bcryptjs');
const { where } = require("sequelize");

let file = "feeform.controller";
let Jkey = process.env.JWT_SECRET_KEY;

exports.register = async (req, res) => {
    try {
        console.log('try register');
        console.log(req.body);
        let query = req.body;
        // if (req.file) {
        //     query.filepath = req.file.path;
        //     console.log('Uploaded file path:', req.file.path);
        // } else {
        //     throw new Error('File upload failed: No file uploaded');
        // }
        //const results = await attendance.create(query);
        const results = await commonService.insertOne(db.feeform, query);
        console.log(results);
        successRes(res, results, SUCCESS.CREATED);
    } catch (error) {
        console.log('catch', error);
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
    }

exports.getAllForms = async (req, res) => {
      try {
        const { fromDate, toDate, status, section } = req.query;
        console.log(fromDate, toDate, status);
        const startDate = fromDate ? new Date(fromDate) : null;
        const endDate = toDate ? new Date(toDate) : null;
        console.log(startDate, endDate);
        let where = {}
    
        if(startDate && endDate){
          console.log('date coming ', startDate, endDate);
          where.formDate = {
              [Op.between]: [startDate, endDate]
            }
        }
        if(status){
          console.log('status coming ', status);
          where.status = status;
        }
        // Filter by section if provided
        if (section) {
          console.log('section coming ', section);
        }
        // Fetch all posts
        const posts = await db.feeform.findAll({
          include: [
            {
                model: db.login, // Include the Login model
                as: 'allocatedToSection', // Alias used in the association
                required: false, 
                attributes: ['userName', 'userType', 'id'], // Only select relevant fields
            },
          ],
          order: [['formDate', 'DESC']], // Optionally, order by upload date
          where: where
        });
        successRes(res, posts, SUCCESS.LISTED);
      } catch (error) {
        console.error('Error fetching posts:', error);
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
      }

    };

    exports.getAllFormsBySection = async (req, res) => {
      try {
        const { fromDate, toDate, status, section } = req.query;
        console.log(fromDate, toDate, status);
        const startDate = fromDate ? new Date(fromDate) : null;
        const endDate = toDate ? new Date(toDate) : null;
        console.log(startDate, endDate);
        let where = {}
    
        if(startDate && endDate){
          console.log('date coming ', startDate, endDate);
          where.formDate = {
              [Op.between]: [startDate, endDate]
            }
        }
        if(status){
          console.log('status coming ', status);
          where.status = status;
        }
        // Filter by section if provided
        if (section) {
          where.allocatedTo = section;
        }
        else
          throw 'Pls provide section id';
        // Fetch all posts
        const posts = await db.feeform.findAll({
          include: [
            {
                model: db.login, // Include the Login model
                as: 'allocatedToSection', // Alias used in the association
                required: false, 
                attributes: ['userName', 'userType', 'id'], // Only select relevant fields
                //where: section ? { userName: section } : {},
            },
          ],
          order: [['formDate', 'DESC']], // Optionally, order by upload date
          where: where
        });
        successRes(res, posts, SUCCESS.LISTED);
      } catch (error) {
        console.error('Error fetching posts:', error);
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
      }

    };

    exports.getAllFormsByFilter = async (req, res) => {
      try {
        const { fromDate, toDate, status, section } = req.query;
        console.log(fromDate, toDate, status);
        const startDate = fromDate ? new Date(fromDate) : null;
        const endDate = toDate ? new Date(toDate) : null;
        console.log(startDate, endDate);
        let where = {}
    
        if(startDate && endDate){
          console.log('date coming ', startDate, endDate);
          where.formDate = {
              [Op.between]: [startDate, endDate]
            }
        }
        if(status){
          console.log('status coming ', status);
          where.status = status;
        }
        // Filter by section if provided
        if (section) {
          where.allocatedTo = section;
        }
        // else
        //   throw 'Pls provide section id';
        // Fetch all posts
        const posts = await db.feeform.findAll({
          include: [
            {
                model: db.login, // Include the Login model
                as: 'allocatedToSection', // Alias used in the association
                required: false, 
                attributes: ['userName', 'userType', 'id'], // Only select relevant fields
                //where: section ? { userName: section } : {},
            },
            {
              model: db.allocateform, // Include the AllocateForm model
              as: 'allocateformReference', // Alias for the associated AllocateForm
              required: false, // Ensure it's joined
              attributes: [
                'feeformId', // Include the relevant fields
                'allocatedTo',
                'proposedFeeLkg',
                'previousOrderFeeLkg',
                'proposedFeeUkg',
                'previousOrderFeeUkg',
                'proposedFeeFirst',
                'previousOrderFeeFirst',
                'proposedFeeSecond',
                'previousOrderFeeSecond',
                'proposedFeeThird',
                'previousOrderFeeThird',
                'proposedFeeFour',
                'previousOrderFeeFour',
                'proposedFeeFive',
                'previousOrderFeeFive',
                'proposedFeeSix',
                'previousOrderFeeSix',
                'proposedFeeSeven',
                'previousOrderFeeSeven',
                'proposedFeeEight',
                'previousOrderFeeEight',
                'proposedFeeNine',
                'previousOrderFeeNine',
                'proposedFeeTen',
                'previousOrderFeeTen',
                'proposedFeeEleven',
                'previousOrderFeeEleven',
                'proposedFeeTwelve',
                'previousOrderFeeTwelve'
                // Include other fields from AllocateForm as needed
              ],
            },
          ],
          order: [['formDate', 'DESC']], // Optionally, order by upload date
          where: where
        });
        successRes(res, posts, SUCCESS.LISTED);
      } catch (error) {
        console.error('Error fetching posts:', error);
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
      }

    };

    exports.getPendingForms = async (req, res) => {
      try {
        console.log('try', req)
        const { fromDate, toDate, status, section } = req.query;
        console.log(fromDate, toDate, status);
        const startDate = fromDate ? new Date(fromDate) : null;
        const endDate = toDate ? new Date(toDate) : null;
        console.log(startDate, endDate);
        let where = {}
        where.status = 'Pending';

        if(startDate && endDate){
          console.log('date coming ', startDate, endDate);
          where.formDate = {
              [Op.between]: [startDate, endDate]
            }
        }

        // Fetch all posts
        const posts = await db.feeform.findAll({
          include: [
            {
                model: db.login, // Include the Login model
                as: 'allocatedToSection', // Alias used in the association
                required: false, 
                attributes: ['userName', 'userType', 'id'], // Only select relevant fields
            },
          ],
          order: [['formDate', 'DESC']], // Optionally, order by upload date
          where: where
        });
        successRes(res, posts, SUCCESS.LISTED);
      } catch (error) {
        console.error('Error fetching posts:', error);
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
      }

    };

    exports.getFormById = async (req, res) => {
      try {

        let where = {}

        if(req.query.id){
          console.log('id coming ', req.query.id);
          where.id = req.query.id
        }
        else  
          throw 'Pls provide id';

        // Fetch all posts
        const posts = await db.feeform.findOne({
          include: [
            {
                model: db.login, // Include the Login model
                as: 'allocatedToSection', // Alias used in the association
                required: false, 
                attributes: ['userName', 'userType', 'id'], // Only select relevant fields
            },
          ],
          order: [['formDate', 'DESC']], // Optionally, order by upload date
          where: where
        });
        successRes(res, posts, SUCCESS.LISTED);
      } catch (error) {
        console.error('Error fetching posts:', error);
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
      }

    };


    exports.allocateFeeForm = async (req, res) => {
      try {
              let query = {};
              // let student;
              // let inputQuery;
              query.body = req.body;
              query.body.status = "Allocated"
              console.log('query.body ', query.body);
              // Step 1: Check if `id` is provided and fetch the student
              if (req.query.id && req.body.allocatedTo) {
                  query.where = { id: req.query.id };
                  console.log('query ', query);
                  const updateResult = await commonService.update(db.feeform, query);
                  console.log('Student updated with login id and approval status');
                  successRes(res, updateResult, SUCCESS.UPDATED);
              } else {
                  throw 'Please provide valid inputs';
              }
      } catch (error) {
          // res.status(500).json({ message: error.message });
          console.log('Error updating Student:', error);
          const message = error.message ? error.message : ERRORS.GENERIC;
          errorRes(res, null, "Error updating Student:", ERRORS.UPDATED);
      }
  }

  exports.getDistricts = async (req, res) => {
    try {
      let where = {}
      const districts = await db.district.findAll();
      successRes(res, districts, SUCCESS.LISTED);
    } catch (error) {
      console.error('Error fetching districts:', error);
      const message = error.message ? error.message : ERRORS.LISTED;
      errorRes(res, error, message, file);
    }

  };
    
  exports.getSchoolType = async (req, res) => {
    try {
      let where = {}
      const school = await db.school.findAll();
      successRes(res, school, SUCCESS.LISTED);
    } catch (error) {
      console.error('Error fetching school:', error);
      const message = error.message ? error.message : ERRORS.LISTED;
      errorRes(res, error, message, file);
    }

  };