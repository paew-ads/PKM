const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pkm",
});

router.post("/auth/signin", (req, res) => {
  console.log(req.body);
  const { uid, upwd } = req.body.ipForm;
  if (!uid || !upwd) {
    return res.status(400).json({
      error: true,
      message: "ID or Password is required.",
    });
  }

  const sql =
    "SELECT uid,upwd,uname,urole FROM users WHERE uid = ? AND upwd = ?";
  db.query(sql, [uid, upwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      console.log(result[0]);
      req.session.user = result[0];
      return res.json({
        message: "Login Success",
        user: result[0],
        token: "test-token",
      });
    }
  });
});

router.get("/auth/hassignned", (req, res) => {
  if (req.session.user) {
    return res.json({
      auth: true,
      message: "you are signned",
    });
  }
  return res.json({
    auth: false,
    message: "you are not login",
  });
});

router.get("/auth/signout", (req, res) => {
  req.session.destroy();
  res.json({
    auth: false,
  });
});

module.exports = router;
