const validator = require('validator');

const chairperson = {

    //get the chairperson landing page
    getChairperson: function(req, res){
        res.render("users/chairperson");
    }
}


module.exports = chairperson; 