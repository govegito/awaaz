var express                 = require('express');
var app                     = express();
var mongoose		        = require('mongoose');
var bodyparser              = require("body-parser");
var User                    = require("./model/user");
var passport                = require("passport");
var LocalStrategy           = require("passport-local");
var passportLocalMongoose   = require("passport-local-mongoose");
var methodOverride          = require("method-override");
var aboutroutes             = require("./routes/about.js");
var ourworkroutes           = require("./routes/ourwork.js");
var awardgalleryroutes      = require("./routes/awardgallery.js");
var newsandeventsroutes     = require("./routes/newsandevents.js");
var authorizationroutes     = require("./routes/authorization.js");
var contactroutes           = require('./routes/contact.js');
var supportroutes           = require("./routes/support.js")

mongoose.connect("mongodb://localhost:27017/awaaz", { useNewUrlParser: true });
app.set('view engine', 'ejs');
//app.use('/assets', express.static('/assets'));
app.use(express.static(__dirname + "/assets"));

app.use(bodyparser.urlencoded({extended:true}));
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


//==========================================================================================================
//ROUTES
app.use("/news",     newsandeventsroutes);
app.use("/award",    awardgalleryroutes);
app.use("/aboutus",  aboutroutes);
app.use("/ourwork",  ourworkroutes);
app.use(             authorizationroutes);
app.use('/contacts', contactroutes);
app.use("/support",  supportroutes);
app.get("/", function(req, res){
	res.render('landing.ejs');
});





app.listen(3000, function(){
	console.log("okay");
});