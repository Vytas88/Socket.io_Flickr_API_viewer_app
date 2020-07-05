var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

var Flickr = require("flickr-sdk");
var feeds = new Flickr.Feeds();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("socket connection is on!");
  setInterval(function () {
    feeds
      .publicPhotos()
      .then((Response) => Response.body.items)
      .then((items) => socket.emit("photos", items));
  }, 10000);
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
