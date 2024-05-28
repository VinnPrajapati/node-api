const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jetlaravel",
});

conn.connect((err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("connect");
  }
});

module.exports = conn;
