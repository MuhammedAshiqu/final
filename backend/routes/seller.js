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

<<<<<<< HEAD
router.get("/signup", function (req, res) {
  if (req.session.signedIn) {
    res.redirect("/seller");
  } else {
    res.render("/signup", { admin: false, user:false });
  }
});

router.post("/signup", function (req, res) {
  console.log("hlo")
=======
router.get("seller/signup", function (req, res) {
  if (req.session.signedIn) {
    res.redirect("/seller");
  } else {
    res.render("seller/signup", { admin: false, user:false });
  }
});

router.post("seller/signup", function (req, res) {
  
>>>>>>> main
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

<<<<<<< HEAD
});
router.get("/signin", function (req, res) {
  if (nw) {
    res.json({user:nw.seller})
  } else {
    res.json({message:not})
    
  }
  
});
// signin
router.post("/signin", function (req, res) {
  console.log('input is',req.body);
  sellerHelper.doSignin(req.body).then((response) => {
    if (response.status) {
      req.session.signedIn = true;
      req.session.seller = response.seller;
      // res.redirect("/");
      nwslr=req.session.seller 
      res.json({session:req.session}).status(200)
    } else {
      req.session.signInErr = "Invalid Email/Password";
      // res.redirect("/signin");
      res.json({message:'Invalid Email/Password'}).status(422)
    }
  });

// add shop
  router.get('/addshop',verifySignedIn,(req,res)=>{
    console.log("seller",req.session.seller);
    res.render('sellers/seller-add-shop')
  })
  router.post('/addshop',verifySignedIn,(req,res)=>{
    // console.log(req.body);
    console.log(req.body);
    let seller= nwslr
  
    
    sellerHelper.addShop(req.body,seller).then((response)=>{
      res.json({response:response,vibe:true})
    })
    
  })
// add product
  router.get('/addproduct',verifySignedIn,(req,res)=>{
    console.log("seller",req.session.seller);
    res.render('sellers/seller-add-product')
  })
  router.post('/addproduct',verifySignedIn,(req,res)=>{
    // console.log(req.body);
    console.log(req.body);
    let seller = nwslr
  
    
    sellerHelper.addProduct(req.body,user).then((response)=>{
      res.json({response:response,vibe:true})
    })
    
  })
  // get all prod and delete

  router.get("/edit-product/:id", verifySignedIn, async function (req, res) {
    let administator = req.session.seller;
    let productId = req.params.id;
    let product = await sellerHelper.getProductDetails(productId);
    console.log(product);
    res.render("admin/edit-product", { seller: true, product, administator });
  });
  
  router.post("/edit-product/:id", verifySignedIn, function (req, res) {
    let productId = req.params.id;
    sellerHelper.updateProduct(productId, req.body).then(() => {
      if (req.files) {
        let image = req.files.Image;
        if (image) {
          image.mv("./public/images/product-images/" + productId + ".png");
        }
      }
      res.redirect("/seller/all-products");
    });
  });
  
  router.post("/delete-product/:id",  function (req, res) {
    let productId = req.params.id;
    console.log('proid',productId);
    
    sellerHelper.deleteProduct(productId).then((response) => {
      // fs.unlinkSync("./public/images/product-images/" + productId + ".png");
      res.json({message:'delete success'});
    });
  });
});

module.exports = router;
=======
});
>>>>>>> main
