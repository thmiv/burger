// connections information
require("dotenv").config();
const dbLogin = require("../login.js");
//console.log(dbLogin);

// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: dbLogin.eatDb.host,
  port: 3306,
  user: dbLogin.eatDb.username,
  password: dbLogin.eatDb.password,
  database: "vrogcgqqxfyly3sk"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
