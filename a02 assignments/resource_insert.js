const mysql = require('mysql2');
let dbparams = {
    host: 'localhost',
    user: 'anuj',
    password: 'cdac',
    database: 'node_db',
    port: '3306'
}
const con = mysql.createConnection(dbparams);
let resid = 4;
let resname = 'Wither 3';
let resstatus = false;

con.query('insert into resources (resid, resname, resstatus) values (?, ?, ?)',[resid, resname, resstatus],
(err, res)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Done');
        console.log(res.affectedRows);
        // console.log(res[0].username);
    }
});