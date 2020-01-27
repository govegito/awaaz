var express=require("express");
var router=express.Router();


router.get("/vision", function(req,res){
    res.render("../views/about/vision.ejs");
});

router.get("/speech", function(req,res){
    res.render("../views/about/speech.ejs");
});

router.get("/ourteam", function(req,res){
    res.render("../views/about/ourteam.ejs");
});

router.get("/employ", function(req,res){
    res.render("../views/about/employ.ejs");
});

router.get("/awards", function(req,res){
    res.render("../views/about/awards.ejs");
});

module.exports=router;
