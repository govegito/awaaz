require('dotenv').config();
var express                 = require('express');
var app                     = express();
var mongoose		        = require('mongoose');
var bodyparser              = require("body-parser");
var User                    = require("./model/user");
var passport                = require("passport");
var LocalStrategy           = require("passport-local");
var passportLocalMongoose   = require("passport-local-mongoose");
var cookieparser            = require("cookie-parser");
var methodOverride          = require("method-override");
var aboutroutes             = require("./routes/about.js");
var ourworkroutes           = require("./routes/ourwork.js");
var awardgalleryroutes      = require("./routes/awardgallery.js");
var newsandeventsroutes     = require("./routes/newsandevents.js");
var authorizationroutes     = require("./routes/authorization.js");
var contactroutes           = require('./routes/contact.js');
var supportroutes           = require("./routes/support.js");
var footerroutes            = require("./routes/footerlinks.js");
var eventroutes             = require("./routes/events.js");
var async                   = require("async");
var nodemailer              = require("nodemailer");
var crypto                  = require("crypto");
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);
mongoose.connect("mongodb+srv://anu123:apple123@cluster0-5c5ij.mongodb.net/awaaz?retryWrites=true&w=majority", { useNewUrlParser: true });

app.set('view engine', 'ejs');
//app.use('/assets', express.static('/assets'));
app.use(express.static(__dirname + "/assets"));
app.use(express.static("/views/support"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
//===========================================================================================================
//PASSPORT CONFIG
app.use(methodOverride("_method"));
app.use(require("express-session")({
    secret: "My life is mine i decide what to do",
    resave: false,
    saveUninitialized: false
}));  
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());   
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser= req.user;
	next();
});

//==========================================================================================================
//ROUTES
app.use("/news",     newsandeventsroutes);
app.use("/award",    awardgalleryroutes);
app.use("/aboutus",  aboutroutes);
app.use("/ourwork",  ourworkroutes);
app.use(             authorizationroutes);
app.use('/contacts', contactroutes);
app.use("/support",  supportroutes);
app.use('/web', footerroutes);
app.use('/events',eventroutes);
app.get("/", function(req, res){
	res.render('landing.ejs');
});





app.listen(process.env.PORT,process.env.IP, function(){
	console.log("okay");
});