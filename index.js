var express = require('express');
var app     = express();
var mongoose		=require('mongoose');
bodyparser=     require("body-parser");
//mongoose.connect("mongodb://localhost:27017/awaaz", { useNewUrlParser: true });
app.use('/views/assets', express.static('views/assets'));
app.use(bodyparser.urlencoded({extended:true}));


app.get("/", function(req, res){
	res.send('hello from anurags dev branch');
});

app.listen(3000, function(){
	console.log("okay");
});