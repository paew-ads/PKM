const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const fs = require("fs");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pkm",
});

router.get("/delete/:uid", (req, res) => {
  const { uid } = req.params;
  console.log(uid);
  const sql = "DELETE FROM users WHERE uid = ?";
  db.query(sql, [uid], (err, result) => {
    if (err) throw err;
    if (result) {
      res.send({ error: false, message: "ลบผู้ใช้สำเร็จ" });
    } else {
      res.send({ error: true, message: "ลบผู้ใช้ไม่สำเร็จ" });
    }
  });
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

  const sql = "SELECT * FROM users WHERE uid = ? AND upwd = ?";
  db.query(sql, [uid, upwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      console.log(result[0]);
      req.session.user = result[0];
      return res.json({
        message: "ยินดีต้อนรับคุณ " + result[0].uname,
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
          error: true,
          message: "ไม่มีผู้ใช้นี้",
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
  console.log(req.body);
  const sql =
    "INSERT INTO users (uid, upwd,uname, urole,uimg) VALUES (?, ?, ?, ?,'')";

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
  if (uid && upwd && uname && urole) {
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
  } else if (upwd) {
    const sql = "UPDATE users SET upwd=? WHERE uid = ?";
    db.query(sql, [upwd, olduid], (err, result) => {
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
  }
});

router.post("/upload", (req, res) => {
  const { uid } = req.body;
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      let avatar = req.files.myFile;

      avatar.mv("./uploads/" + avatar.name);

      const sql = "UPDATE users SET uimg =? WHERE uid = ?";

      db.query(sql, ["./uploads/" + avatar.name, uid], (err, result) => {
        if (err) {
          res.json({
            error: true,
            message: "Failed to Upload data",
          });
        } else {
          res.json({
            error: false,
            message: "Upload sucess",
          });
        }
      });
    }
  } catch (err) {
    throw err;
  }
});

router.get("/image", (req, res) => {
  const { path } = req.query;
  const fi = fs.readFileSync(path);
  res.setHeader("Content-Type", "image/jpeg");
  res.send(fi);
});

module.exports = router;
