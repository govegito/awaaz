var express			=require("express");
var router			=express.Router();
var User 			=require("../model/user");
var passport 		=require('passport');

router.get("/register",function(req,res){
	res.render("register.ejs");
});

router.post("/register",function(req,res){
	var Newuser= new User({username: req.body.username, email: req.body.email, phonenumber: req.body.phonenumber});
	User.register(Newuser, req.body.password, function(err, user){
		if(err){
			return res.render("register.ejs");
		}
		else{
			console.log(user.username);
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/")
		});
	});
});

//login

router.get("/login",function(req,res){
	res.render("login.ejs");
	
});

router.post("/login",passport.authenticate("local", {
	successRedirect : "/",
	failureRedirect: "/login"
}),function(req,res){
	//var backurl = req.header('referer') || '/';
	//res.json({redir: backurl});
	//window.history.go(-1);
});


//logout

router.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
});

module.exports=router;