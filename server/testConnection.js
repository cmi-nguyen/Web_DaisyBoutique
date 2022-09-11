var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'db_daisy_boutique'
});

con.connect(function(err) {
  if (err) throw err;
  console.log(" Database Connected!");
});