var express = require("express");
var router = express.Router();

router.get("/WSD",(req,res)=>{
    res.render("../views/events/WSD.ejs");
});
router.get("/global-forum",(req,res)=>{
    res.render("../views/events/globalforum.ejs");
});
router.get("/int-summit",(req,res)=>{
    res.render("../views/events/isummit.ejs");
});
router.get("/awards",(req,res)=>{
    res.render("../views/events/awards.ejs");
});
module.exports = router;