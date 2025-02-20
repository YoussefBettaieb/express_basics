const express = require("express");

const bodyparser = require("body-parser");

const path = require("path");

const router = express.Router();

const products = [];

router.use(bodyparser.urlencoded({ extended: false }));
router.get("/add-product", (req, res, next) => {
  //console.log("In my app middleware!");
  res.sendFile(path.join(__dirname, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});
exports.routes = router;
exports.products = products;
