const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
let http = require('http');
const fs = require('fs');
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let server;
// if (process.env.local == 'true') {
//   server = http.createServer(app);
// } else {
//   let options = {
//       key: fs.readFileSync('/home/jenkins/SSL/mean.key', 'utf8'),
//       cert: fs.readFileSync('/home/jenkins/SSL/mean.crt', 'utf8')
//   };
//   server = https.createServer(options, app);
// }

server = http.createServer(app);

// Server starting point
server.listen(2021, () => {
  console.log("server is running on port 2021");
});