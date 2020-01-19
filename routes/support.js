var express     = require("express");
var router      = express.Router();
var middleware	= require('../middleware/index.js');

router.get("/", function(req,res){
    res.render("../views/support/index.ejs");
});

router.get("/join", middleware.isLoggedIn,function(req, res){
    res.send("this is join page");
    //res.render("../views/support/join.ejs");
});

router.get("/payment",middleware.isLoggedIn, function(req, res){
    res.send("this is payment page");
    //res.render("../views/support/payment.ejs");
});

module.exports=router;