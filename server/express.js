const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const router = require("./router/user.route");
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use("/", router);

module.exports = app;
