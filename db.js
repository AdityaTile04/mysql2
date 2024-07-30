const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "employee_db",
  password: "aditya",
});

module.exports = connection;
