const mysql = require('mysql');

let connectMySQL = null;
const ConnectMySQL = () => {
  connectMySQL = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "payroll"
  });
}