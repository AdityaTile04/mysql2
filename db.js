const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employee_db",
  password: "aditya",
});

connection.connect((err) => {
  if (err) {
    console.log(`Some error in DB`);
  } else {
    console.log(`Connected To Database`);
  }
});

module.exports = connection;
