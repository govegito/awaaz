var express     = require("express");
var router      = express.Router();
var middleware	= require('../middleware/index.js');

router.get("/", function(req,res){
    res.render("../views/support/index.ejs");
});

router.get("/join", middleware.isLoggedIn,function(req, res){
    res.send("this is join page");
    //res.render("../views/support/join.ejs");
});
router.post("/payment/charge", (req, res) => {
    let amount = 500;
  
    stripe.customers.create({
      email: req.body.email,
      card: req.body.id
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Sample Charge",
        currency: "usd",
        customer: customer.id
      }))
    .then(charge => res.send(charge))
    .catch(err => {
      console.log("Error:", err);
      res.status(500).send({error: "Purchase Failed"});
    });
  });
router.get("/payment",middleware.isLoggedIn, function(req, res){
    res.render("../views/support/payment.ejs");
    //res.render("../views/support/payment.ejs");
});

  
module.exports=router;