
const express = require("express");
const router = express.Router();

const instructorController = require('../controller/controller.instructor'); 

/*
*/ 

router.get("/",instructorController.getInstructor);
router.get("/grading", instructorController.getInstructorGrading); 
router.get("/user-management", instructorController.getInstructorUser); 


module.exports = router; 
