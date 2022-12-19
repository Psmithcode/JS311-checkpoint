// first we're going to bring in our mysql module
let mysql = require("mysql");

//and then create a connection using our variables stored in the .env file

let connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  root: process.env.root,
});

//this will just tell us the time that our connection was established if it works

connection.query("select now()", function (err, results) {
  if (err) {
    console.log("we have an error with our connection");
  } else {
    console.log("connection established at ", results);
  }
});

module.exports = connection;
