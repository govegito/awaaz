var express = require("express");
var router = express.Router();

router.get('/disclaimer',(req,res)=>{res.render("../views/footerlinks/disclaimer.ejs");});
router.get('/privacy-policy',(req,res)=>{res.render("../views/footerlinks/privpolicy.ejs");});
router.get('/fraud-alert',(req,res)=>{res.render("../views/footerlinks/fraudalert.ejs");});

module.exports = router;