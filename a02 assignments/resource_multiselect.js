const mysql = require('mysql2');
let dbparams = {
    host: 'localhost',
    user: 'anuj',
    password: 'cdac',
    database: 'node_db',
    port: '3306'
}
const con = mysql.createConnection(dbparams);

let resstatus = 'true';

con.query('select * from resources where resstatus = ?',[resstatus],
(err, res)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Done');
        // console.log(res.affectedRows);
        for (let i = 0; i < res.length; i++){
            console.log(res[i].resid);
            console.log(res[i].resname);
            console.log(res[i].resstatus);
        }
    }
});