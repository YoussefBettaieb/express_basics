const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

const adminRoutes = require("./admin");
const shopRoutes = require("./shop");

app.use(bodyparser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3001);
