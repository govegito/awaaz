var express = require("express");
var router = express.Router();

router.get("/WSD",(req,res)=>{
    res.render("../views/events/WSD.ejs");
});
router.get("/global-forum",(req,res)=>{
    res.render("../views/events/globalforum.ejs");
});
router.get("/congress",(req,res)=>{
    res.render("../views/events/natcongress.ejs");
});

module.exports = router;