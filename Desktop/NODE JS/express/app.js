const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./admin");
const shopRoutes = require("./shop");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use(adminData.routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3001);
