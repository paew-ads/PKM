const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pkm",
});

router.get("/select/:uid", (req, res) => {
  const { uid } = req.params;
  console.log(uid);
  const sql = "SELECT * FROM users WHERE uid = ?";
  db.query(sql, [uid], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result[0]);
    }
  });
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
    } else {
      return res.json({
        error: true,
        message: "Login fail",
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

router.post("/add", (req, res) => {
  const { uid, upwd, uname, urole } = req.body;
  const sql = "INSERT INTO users (uid, upwd,uname, urole) VALUES (?, ?, ?, ?)";

  db.query(sql, [uid, upwd, uname, urole], (err, result) => {
    if (err) {
      res.json({
        error: true,
        message: "Failed to save data",
      });
    } else {
      res.json({
        error: false,
        message: "insert sucess",
      });
    }
  });
});

router.post("/update", (req, res) => {
  const olduid = req.body.olduid;
  const { uid, upwd, uname, urole } = req.body.ipForm;
  const sql = "UPDATE users SET uid = ?,upwd=?,uname=?,urole=? WHERE uid = ?";
  db.query(sql, [uid, upwd, uname, urole, olduid], (err, result) => {
    if (err) {
      res.json({
        error: true,
        message: "Failed to Update data",
      });
    } else {
      res.json({
        error: false,
        message: "Update sucess",
      });
    }
  });
});

module.exports = router;
