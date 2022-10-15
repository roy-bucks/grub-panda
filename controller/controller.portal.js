/* import the model portal */
const modalPortal = require("../model/model.portals");

//validator module 
const validator = require('validator');

const portal = {

    /* this will render the index ejs 
       for sample reference */
    login: (req, res)=>{
        res.render("portal/login"); 
    }, 
    register: (req, res)=>{
        res.render("portal/register");
    },
    newUser: async (req, res) =>{
        
        if(req.body.userType == "Merchant"){
            //save data to merchant
            let response = await modalPortal.saveMerchantUser(req.body.userData);
            res.send({
                success: response,
            })
        }

        if(req.body.userType == "Rider"){
            //save data to merchant
            let response = await modalPortal.saveRiderUser(req.body.userData);
            res.send({
                success: response,
            })
        }

        if(req.body.userType == "Customer"){
            //save data to merchant
            let response = await modalPortal.saveCustomerUser(req.body.userData);
            res.send({
                success: response,
            })
        }


    }

 
}


module.exports = portal; 