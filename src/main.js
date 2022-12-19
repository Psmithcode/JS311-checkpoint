//this is just standard express stuff

let express = require("express");
require("dotenv").config();

let app = express();

let port = process.env.port || 3306;

app.use(express.json());
let router = require("../routes/routes");
app.use(router);

// this makes our express 'app' listen for any activity on our port
app.listen(port, function () {
  console.log("app started on port: ", port);
});
