require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const utils = require("./utils");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pkm",
});

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
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
app.post("/api/Customer", (req, res) => {
  const searchCus = req.body.searchCus;

  if (!searchCus) {
    return res.status(400).json({
      error: true,
      message: "searchCus  is required.",
    });
  }

  const sql = "SELECT * FROM pkm.customers WHERE cus_Name LIKE ?";

  db.query(sql, [searchCus], (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/Customers", (req, res) => {
  const sql = "SELECT * FROM pkm.customers";

  db.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/api/login", (req, res) => {
  const userName = req.body.userName;

  if (!userName) {
    return res.status(400).json({
      error: true,
      message: "Username or Password is required.",
    });
  }

  const sql =
    "SELECT userName,passWord FROM pkm.accounts WHERE userName LIKE ?";
  db.query(sql, [userName], (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      console.log(result[0]);
      const token = utils.generateToken(result[0]);
      const userObj = utils.getCleanUser(result[0]);
      return res.json({ user: userObj, token });
    }
  });
});

app.post("/users/signin", function (req, res) {
  const user = req.body.username;
  const pwd = req.body.password;

  // return 400 status if username/password is not exist
  if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Username or Password is required.",
    });
  }

  // return 401 status if the credential is not match.
  if (user !== userData.username || pwd !== userData.password) {
    return res.status(401).json({
      error: true,
      message: "Username or Password is wrong.",
    });
  }

  // generate token
  const token = utils.generateToken(userData);
  // get basic user details
  const userObj = utils.getCleanUser(userData);
  // return the token along with user details
  return res.json({ user: userObj, token });
});

app.get("/verifyToken", function (req, res) {
  var userObj = null;

  // check header or url parameters or post parameters for token
  var token = req.query.token;
  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required.",
    });
  }
  // check token that was passed by decoding token using secret
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err)
      return res.status(401).json({
        error: true,
        message: "Invalid token.",
      });

    const sql =
      "SELECT userName,passWord FROM pkm.accounts WHERE userName LIKE ?";
    db.query(sql, [user.userName], (err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        console.log(result[0]);
        userObj = utils.getCleanUser(result[0]);
      }
    });
    return res.json({ user: userObj, token });
  });
});

app.get("/", (req, res) => {
  if (!req.user)
    return res
      .status(401)
      .json({ success: false, message: "Invalid user to access it." });
  res.send("Welcome to the Node.js Tutorial! - " + req.user.name);
});

app.listen(port, () => {
  console.log("running on port " + port);
});
