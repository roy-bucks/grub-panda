/* import the model portal */
const modalPortal = require("../model/model.portals");

//validator module 
const validator = require('validator');
const session = require('express-session');
const { response } = require("express");

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
        
        //validation 
        exist = await modalPortal.checkEmail(req.body.userData.email, req.body.userData.pass); 
        if(exist){
            res.send({
                success: false,
                message: "User already exist"
            })
        }
        else{
            response = await modalPortal.saveNewUser(req.body.userData);
            if(response){
                res.send({
                    success: true,
                    message: "User already exist"
                })
            }
            else{
                res.send({
                    success: false,
                    message: "Error occured"
                })
            }
        }
    },
    loginProcess: async (req, res) =>{

        //check from user 
        user = await modalPortal.checkUser(req.body);
        if(user){
            res.send({
                success: true, 
                data: {
                    user: user[0].firstname, 
                    message: "Welcome " + user[0].userType
                }
            })
        }
        else{
            res.send({
                success: false, 
                data: {
                    message: "We can't find this account"
                }
            })
        }


    }

 
}


module.exports = portal; 