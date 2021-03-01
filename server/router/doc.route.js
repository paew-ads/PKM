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

router.get("/file/:rcid", (req, res) => {
  if (!req.session.user) {
    res.send("you not login");
  } else {
    const { rcid } = req.params;
    const sql = "SELECT * FROM document WHERE rcid = ?";
    db.query(sql, [rcid], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log(result[0]);
        if (result[0].fitype) {
          res.setHeader("Content-Type", result[0].fitype);
          res.send(result[0].ficont);
        } else {
          res.send("no file");
        }
      }
    });
  }
});

router.get("/select/:rcid", (req, res) => {
  const { rcid } = req.params;
  const sql = "SELECT * FROM document WHERE rcid = ?";
  db.query(sql, [rcid], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      console.log(result[0]);
      res.send(result[0]);
    }
  });
});

router.get("/delete/:rcid", (req, res) => {
  const { rcid } = req.params;
  const sql = "DELETE FROM document WHERE rcid = ?";
  db.query(sql, [rcid], (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result) {
      res.json({
        massage: "delete success",
      });
    }
  });
});

router.post("/add", (req, res) => {
  var fitype = "";
  var ficont = "";
  if (req.files) {
    const { docfile } = req.files;
    fitype = docfile.mimetype;
    ficont = fs.readFileSync(docfile.tempFilePath);
  }
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
  } = JSON.parse(req.body.info);
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
    }
  );
});

router.post("/update", (req, res) => {
  const oldid = JSON.parse(req.body.oldid);
  var fitype = "";
  var ficont = "";
  if (req.files) {
    const { ipfile } = req.files;
    fitype = ipfile.mimetype;
    ficont = fs.readFileSync(ipfile.tempFilePath);
  }
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
  } = JSON.parse(req.body.ipfrom);
  if (req.files) {
    const sql =
      "UPDATE document SET rcid=?, rcdate=?,doccate=?,docid=?,docdate=?,doctype=?,docsubj=?,doccont=?,docauth=?,fitype=?,ficont=? WHERE rcid=?";
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
        if (err) {
          res.json({
            error: true,
            message: "Failed to update data",
          });
        } else {
          res.json({
            error: false,
            message: "update sucess",
          });
        }
      }
    );
  } else {
    const sql =
      "UPDATE document SET rcid=?, rcdate=?,doccate=?,docid=?,docdate=?,doctype=?,docsubj=?,doccont=?,docauth=? WHERE rcid=?";
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
        if (err) {
          res.json({
            error: true,
            message: "Failed to update data",
          });
        } else {
          res.json({
            error: false,
            message: "update  sucess (no file)",
          });
        }
      }
    );
  }
});

router.get("/list", (req, res) => {
  const { doccate, keyword, stdate, endate } = req.query;
  const st = Date.now();
  const now = new Date(st);
  const nowDate =
    now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  const sql =
    "SELECT * FROM document WHERE doccate = ? AND (docdate BETWEEN ? AND ?)  ORDER BY rcdate DESC,rcid DESC";
  db.query(
    sql,
    [doccate, new Date(nowDate), new Date(nowDate)],
    (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log(result);
        res.send(result);
      } else {
        res.send({
          error: true,
        });
      }
    }
  );
});

router.get("/search", (req, res) => {
  console.log(req.query);
  const { doccate, keyword, stdate, endate } = req.query;
  if (keyword && stdate && endate) {
    const sql =
      "SELECT * FROM document WHERE doccate = ? AND (rcid = ? OR docid = ? OR docsubj LIKE ?) AND (docdate BETWEEN ? AND ?) ORDER BY rcdate DESC,rcid DESC";
    db.query(
      sql,
      [
        doccate,
        keyword,
        keyword,
        "%" + keyword + "%",
        new Date(stdate),
        new Date(endate),
      ],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          console.log(result);
          res.send(result);
        } else {
          res.send({
            error: true,
            message: "no data",
          });
        }
      }
    );
  } else if (keyword) {
    const sql =
      "SELECT * FROM document WHERE doccate = ? AND (rcid = ? OR docid = ? OR docsubj LIKE ?) ORDER BY rcdate DESC,rcid DESC";
    db.query(
      sql,
      [doccate, keyword, keyword, "%" + keyword + "%"],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          console.log(result);
          res.send(result);
        } else {
          res.send({
            error: true,
            message: "no data",
          });
        }
      }
    );
  } else if (stdate && endate) {
    const sql =
      "SELECT * FROM document WHERE doccate = ? AND (docdate BETWEEN ? AND ?) ORDER BY rcdate DESC,rcid DESC";
    db.query(sql, [doccate, stdate, endate], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log(result);
        res.send(result);
      } else {
        res.send({
          error: true,
          message: "no data",
        });
      }
    });
  } else {
    const st = Date.now();
    const now = new Date(st);
    const nowDate =
      now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    const sql =
      "SELECT * FROM document WHERE doccate = ? AND (docdate BETWEEN ? AND ?)  ORDER BY rcdate DESC,rcid DESC";
    db.query(
      sql,
      [doccate, new Date(nowDate), new Date(nowDate)],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          console.log(result);
          res.send(result);
        } else {
          res.send({
            error: true,
            message: "no data",
          });
        }
      }
    );
  }
});

module.exports = router;
