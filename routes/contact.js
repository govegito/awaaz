var express=require("express");
var router=express.Router();


router.get("/", function(req,res){
    res.render("../views/contact.ejs");
});
router.post("/",function(req,res){
    res.render("../views/contactredirect.ejs");
});
module.exports=router;