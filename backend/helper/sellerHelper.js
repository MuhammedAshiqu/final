var db = require("../config/connection");
var collections = require("../config/collections");
var bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;

module.exports = {
  doSignup: (sellerData) => {
    console.log("Data is ",sellerData);
    return new Promise(async (resolve, reject) => {
      sellerData.Password = await bcrypt.hash(sellerData.Password, 10);
      db.get()
        .collection(collections.SELLERS_COLLECTION)
        .insertOne(sellerData)
        .then((data) => {

          console.log(data)

          resolve(data.ops[0]);
        });
    });
  },




};
