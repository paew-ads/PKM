const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');


const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'1234',
    database:'pkm'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/api/login',(req,res)=>{
    const userName = req.body.userName;
    const sql = "SELECT userName,passWord FROM pkm.accounts WHERE userName LIKE ?";
    db.query(sql,[userName],(err,result)=>{
        if (err) throw err;
        console.log(result);
        if(result.length > 0){
            res.send("login success");
        }else{
            res.send("login Failed");
        }
    });
});

app.listen(3001,() =>{
    console.log("running on port 3001");
});