var express=require("express");
var router=express.Router();

var User 			=require('../models/user.js');
var passport 		=require('passport');
router.get("/register",function(req,res){
	res.render("register.ejs");
});

router.post("/register",function(req,res){
	var Newuser= new User({email: req.body.email, phonenumber: req.body.phonenumber, name: req.body.name});
	User.register(Newuser, req.body.password, function(err, user){
		if(err){
			req.flash("error", err.message);
			return res.render("register.ejs");
		}
		passport.authenticate("local")(req, res, function(){
			req.flash("success","Your account is created, " + user.name)
			res.redirect("/campgrounds")
		})
	})
});

//login

router.get("/login",function(req,res){
	res.render("login.ejs");
	
});

router.post("/login",passport.authenticate("local",{
	successRedirect : "/campgrounds",
	failureRedirect: "/login",

}),function(req,res){});


//logout

router.get("/logout",function(req,res){
	req.logout();
	req.flash("success", "you have been logged out")
	res.redirect("/campgrounds");
});

module.exports=router;