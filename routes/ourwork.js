var express=require("express");
var router=express.Router();


router.get("/ourapp", function(req,res){
    res.render("../views/ourwork/ourapp.ejs");
});

router.get("/training", function(req,res){
    res.render("../views/ourwork/training.ejs");
});


module.exports=router;