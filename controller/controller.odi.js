const validator = require('validator');

const odi = {

    //get the odi landing page
    getOdi: function(req, res){
        res.render("users/odi");
    }
}


module.exports = odi; 