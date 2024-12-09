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
                required: true, 
                attributes: ['userName', 'userType', 'id'], // Only select relevant fields
                where: section ? { userName: section } : {},
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
    