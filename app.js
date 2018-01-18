var express = require('express');
var app = express();
var io = require('socket.io').listen(process.env.PORT, process.env.IP);

app.use(express.static("public"));
app.set("view engine", "ejs");

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send("HiChat!")
});

// chat room
app.get('/chatroom', function(req, res) {
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('HiChat sever started!');
});