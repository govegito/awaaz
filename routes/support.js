var express     = require("express");
var router      = express.Router();
var middleware	= require('../middleware/index.js');

router.get("/career", middleware.isLoggedIn,function(req, res){
    res.render("../views/support/career.ejs");
});

router.get("/partner", middleware.isLoggedIn,function(req, res){
  res.render("../views/support/partner.ejs");
});

router.get("/volunteer", middleware.isLoggedIn,function(req, res){
  res.render("../views/support/volunteer.ejs");
});

router.get("/payment",middleware.isLoggedIn, function(req, res){
  res.render("../views/support/payment.ejs");
});

router.post("/payment/chargeusd", (req, res) => {
    let amount = req.body.amount;
  
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
  router.post("/payment/chargeinr", (req, res) => {
    let amount = req.body.amount;
  
    stripe.customers.create({
      email: req.body.email,
      card: req.body.id
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Sample Charge",
        currency: "inr",
        customer: customer.id
      }))
    .then(charge => res.send(charge))
    .catch(err => {
      console.log("Error:", err);
      res.status(500).send({error: "Purchase Failed"});
    });
  });
  router.post("/payment/chargeusd", (req, res) => {
    let amount = req.body.amount;
  
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

  
module.exports=router;