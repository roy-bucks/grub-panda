const express = require("express");
const router = express.Router();

const odiController= require('../controller/controller.odi'); 

router.get("/",odiController.getOdi);
module.exports = router; 