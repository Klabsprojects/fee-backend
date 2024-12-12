const db = require("../../../utils/sequelize.db");
const commonService = require("../../services/commonService");
const {  jwt, ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")
const { Login } = require("../../models/login/login.model")
const { Sequelize } = require('sequelize');

const bcrypt = require('bcryptjs');
const { where } = require("sequelize");

let file = "allocateform.controller";
let Jkey = process.env.JWT_SECRET_KEY;

exports.register = async (req, res) => {
    try {
        console.log('try register');
        console.log(req.body);
        let query = req.body;
        const results = await commonService.insertOne(db.allocateform, query);
        console.log(results);
        successRes(res, results, SUCCESS.CREATED);
    } catch (error) {
        console.log('catch', error);
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
    }

    exports.editAllocateForm = async (req, res) => {
      try {
              let query = {};
              // let student;
              // let inputQuery;
              query.body = req.body;
              console.log('query.body ', query.body);
              // Step 1: Check if `id` is provided and fetch the student
              if (req.query.feeformId && req.query.allocatedTo) {
                  query.where = { feeformId: req.query.feeformId,
                    allocatedTo: req.query.allocatedTo
                   };
                  console.log('query ', query);
                  const updateResult = await commonService.update(db.allocateform, query);
                  console.log('allocateform update success');
                  successRes(res, updateResult, SUCCESS.UPDATED);
              } else {
                  throw 'Please provide valid inputs';
              }
      } catch (error) {
          // res.status(500).json({ message: error.message });
          console.log('Error updating allocateform:', error);
          const message = error.message ? error.message : ERRORS.GENERIC;
          errorRes(res, null, "Error updating allocateform:", ERRORS.UPDATED);
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
                required: true, 
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

