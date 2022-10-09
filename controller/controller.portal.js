/* import the model portal */
const modalPortal = require("../model/model.portals");

//validator module 
const validator = require('validator');

const portal = {

    /* this will render the index ejs 
       for sample reference */
    login: function(req, res){
        res.render("portal/index"); 
    }, 

    /* this function validate the user credentials */
    validate: async function(req, res){

        if( validator.isEmpty(req.body.user_name) || validator.isEmpty(req.body.pass)){
            res.send(false)
        } 
        else {
            const data = {
                user: req.body.user_name, 
                pass: req.body.pass
            }

            const response = await modalPortal.validate_user(data);


            if(response){
                
               if (response.instructor == "Y" && response.registrationadviser == "Y"){
                    return res
                        .status(200)
                        .send({
                            "name": response.name,
                            "multi_user": true, 
                            "options":[
                                "instructor",
                                "chairperson" 
                            ]
                        })
               }
               if (response.instructor == "Y" && response.odiModule == "Y"){
                    return res
                        .status(200)
                        .send({
                            "name": response.name,
                            "multi_user": true, 
                            "options":[
                                "instructor",
                                "ODI" 
                            ]
                        })
               }
               if (response.instructor == "Y"){


                    // console.log("true instructor"); 

                    return res
                        .status(200)
                        .send({
                            "multi_user": false, 
                            "redirect":"/instructor/"
                        })
               }
               if(response.registrationadviser == "Y"){
                    return res
                        .status(200)
                        .send({
                            "multi_user": false, 
                            "redirect":"/chairperson/"
                        })
               }
               if(response.odiModule == "Y"){
                    return res
                        .status(200)
                        .send({
                            "multi_user": false, 
                            "redirect":"/odi/"
                        }) 
               }
            }
            else {
                res.send(false)
            }
        }
    }
}


module.exports = portal; 