var express = require('express');
var app     = express();
var mongoose		=require('mongoose');
bodyparser=     require("body-parser");
//mongoose.connect("mongodb://localhost:27017/awaaz", { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use('/views/assets', express.static('views/assets'));
app.use(bodyparser.urlencoded({extended:true}));

var aboutroutes=require("./routes/about.js");
var ourworkroutes= require("./routes/ourwork.js");
var awardgalleryroutes=require("./routes/awardgallery.js");
var newsandeventsroutes=require("./routes/newsandevents.js");
var authorizationroutes=require("./routes/authorization.js");
var contactroutes=require('./routes/contact.js');


app.use("/news",newsandeventsroutes);
app.use("/award", awardgalleryroutes);
app.use("/aboutus", aboutroutes);
app.use("/ourwork", ourworkroutes);
app.use(authorizationroutes);
app.use('/contacts',contactroutes);

app.get("/", function(req, res){
	res.render('landing.ejs');
});



app.listen(3000, function(){
	console.log("okay");
});