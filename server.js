const http = require('http');
const express = require('express');
const php = require("node-php");

var app = express();

app.use("/",php.cgi("/mediaWiki"));


//Server
var server = http.Server(app);
var port = process.env.PORT || '3000';

server.listen(port, function () {
  console.log("Server listening on port " + port);
});
