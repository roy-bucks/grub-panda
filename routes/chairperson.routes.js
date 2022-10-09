const express = require("express");
const router = express.Router();

const chairpersonController= require('../controller/controller.chairperson'); 

router.get("/",chairpersonController.getChairperson);
module.exports = router; 