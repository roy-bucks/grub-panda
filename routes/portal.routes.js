const express = require("express");
const router = express.Router();


const portalController = require('../controller/controller.portal'); 


router.get("/login", portalController.login);
router.get("/register", portalController.register);
router.post("/api/register", portalController.newUser);
router.post("/api/login", portalController.loginProcess);





module.exports = router; 
