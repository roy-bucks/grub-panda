//validator module 
const validator = require('validator');

const instructor = {

    //get the instructor landing page
    getInstructor: function(req, res){
        res.render("instructor/dashboard");
    },
    getInstructorGrading:  function(req, res){
        res.render("instructor/grading"); 
    },
    getInstructorUser:  function(req, res){
        res.render("instructor/user_management"); 
    }
}


module.exports = instructor; 