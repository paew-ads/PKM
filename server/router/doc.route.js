const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pkm",
});

router.get("/list/:doccate-:keyword-:stdate-:endate", (req, res) => {
  const { doccate, keyword, stdate, endate } = req.params;
  const sql = "SELECT * FROM document WHERE doccate = ?";
  if (keyword && stdate && endate) {
    sql +=
      " AND (rcid = ? OR docid = ? OR docsubj LIKE %?%) AND (docdate BETWEEN ? AND ?) ORDER BY rcdate DESC,rcid DESC";
    db.query(
      sql,
      [doccate, keyword, keyword, keyword, stdate, endate],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          console.log(result);
        }
      }
    );
  } else if (keyword) {
    sql +=
      " AND (rcid = ? OR docid = ? OR docsubj LIKE %?%) ORDER BY rcdate DESC,rcid DESC";
    db.query(sql, [doccate, keyword, keyword, keyword], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log(result);
      }
    });
  } else if (stdate && endate) {
    sql += " AND (docdate BETWEEN ? AND ?) ORDER BY rcdate DESC,rcid DESC";
    db.query(sql, [doccate, stdate, endate], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log(result);
      }
    });
  } else {
    const nowdate = Date.now();
    sql += " AND (docdate BETWEEN ? AND ?) ORDER BY rcdate DESC,rcid DESC";
    db.query(sql, [doccate, nowdate, nowdate], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log(result);
      }
    });
  }
});

module.exports = router;
