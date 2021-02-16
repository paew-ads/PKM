const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const filesUpload = require("express-fileupload");
const multer = require("multer");
const upload = multer();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  var token = req.headers["authorization"];
  if (!token) return next();

  token = token.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user.",
      });
    } else {
      req.user = user;
      next();
    }
  });
});

app.use(
  filesUpload({
    createParentPath: true,
  })
);

module.exports = app;
