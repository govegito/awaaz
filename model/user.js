var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    phonenumber: 
    isAdmin: {type: Boolean,default: false},
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);