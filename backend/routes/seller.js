var express = require("express");
var sellerHelper = require("../helper/sellerHelper");
const db=require("../config/connection");
const { route } = require("./seller");
const { response } = require("express");
const objectId=require("mongodb").ObjectID;
var router = express.Router();
let nwslr ={}
const verifySignedIn = (req, res, next) => {
  if (nwslr) {
    next();
  } else {
    res.json({message:'login first'});
  }
};

router.get("seller/signup", function (req, res) {
  if (req.session.signedIn) {
    res.redirect("/seller");
  } else {
    res.render("seller/signup", { admin: false, user:false });
  }
});

router.post("seller/signup", function (req, res) {
  
  if(!req.body.Name||!req.body.Email||!req.body.Password){
    res.json({message:"all fields are required"})
  }
  else
  {
  sellerHelper.doSignup(req.body).then((response) => {
   
    req.session.signedIn = true;
    req.session.user = response;
    console.log("arr",response);
   
    res.json({message:"set"}).status(200)
  
  });
}

});