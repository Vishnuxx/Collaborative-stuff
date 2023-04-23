const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(3001, {
  cors: ["http://127.0.0.1:5500/"],
  methods: ["GET", "POST"],
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});


//runs everytime a client connects to a server
io.on("connection", (socket) => {
  console.log(socket.id + " is on connection");

 

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});




server.listen(3002, () => {
  console.log("listening on *:3002");
});










