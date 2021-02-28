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

router.get("/list", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result);
    }
  });
});

router.get("/search", (req, res) => {
  const { keyword } = req.query;
  if (keyword) {
    const sql = "SELECT * FROM users WHERE uname LIKE ?";
    db.query(sql, ["%" + keyword + "%"], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({
          message: "This user does not exist.",
        });
      }
    });
  } else {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send(result);
      }
    });
  }
});

router.get("/auth/signout", (req, res) => {
  req.session.destroy();
  res.json({
    auth: false,
  });
});

module.exports = router;
