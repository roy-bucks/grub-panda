const express = require("express");
const router = express.Router();


const portalController = require('../controller/controller.portal'); 


/* - This is just an example route
   - Param: None
   - Res: render the index.js
*/
router.get("/login", portalController.login);

/*
 1. Get request for Instructor - Roy
 2. Get request for Chairperson - Louie
 3. Get request for ODI - Louie 
*/

/* - This route validate  the user login credentials 
   - Param: user_name, pass
   - res: redirect | return 404 
*/
router.post("/login/validate", portalController.validate);



module.exports = router; 
