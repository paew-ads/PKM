const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const path = require("path");
const fs = require("fs");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pkm",
});

router.get("/select:rcid", (req, res) => {
  const { rcid } = req.params;
  const sql = "SELECT * FROM document WHERE rcid = ?";
  db.query(sql, [rcid], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result);
    }
  });
});

router.get("/delete:rcid ", (req, res) => {
  const { rcid } = req.params;
  const sql = "DELETE * FROM document WHERE rcid = ?";
  db.query(sql, [rcid], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json({
        massage: "delete success",
      });
    }
  });
});

router.post("/add", (req, res) => {
  const { docfile } = req.files;
  const {
    rcid,
    rcdate,
    doccate,
    docid,
    docdate,
    doctype,
    docsubj,
    doccont,
    docauth,
  } = req.body;

  var fitype = "";
  var ficont = "";

  if (docfile) {
    fitype = docfile.mimetype;
    ficont = fs.readFileSync(docfile.tempFilePath);
  }
  const sql =
    "INSERT INTO document(rcid, rcdate,doccate,docid,docdate,doctype,docsubj,doccont,docauth,fitype,ficont) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      rcid,
      new Date(rcdate),
      doccate,
      docid,
      new Date(docdate),
      doctype,
      docsubj,
      doccont,
      docauth,
      fitype,
      ficont,
    ],
    (err, result) => {
      if (err) throw err;
      res.json({
        massage: "insert sucess",
      });
    }
  );
});

router.post("/update", (req, res) => {
  const {
    oldid,
    rcid,
    rcdate,
    doccate,
    docid,
    docdate,
    doctype,
    docsubj,
    doccont,
    docauth,
  } = req.body;
  const fitype = path.extname(req.files);
  const ficont = req.files;
  const sql =
    "UPDATE document SET rcid=?, rcdate=?,doccate=?,docid=?,docdate=?,doctype=?,docsubj=?,doccont=?,docauth=? WHERE rcid=?";
  if (req.files) {
    sql += ",fitype=?,ficont=? WHERE rcid=?";
    db.query(
      sql,
      [
        rcid,
        rcdate,
        doccate,
        docid,
        docdate,
        doctype,
        docsubj,
        doccont,
        docauth,
        fitype,
        ficont,
        oldid,
      ],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          res.json({
            massage: "insert sucess",
          });
        }
      }
    );
  }
  db.query(
    sql,
    [
      rcid,
      rcdate,
      doccate,
      docid,
      docdate,
      doctype,
      docsubj,
      doccont,
      docauth,
      oldid,
    ],
    (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.json({
          massage: "insert sucess No file",
        });
      }
    }
  );
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
