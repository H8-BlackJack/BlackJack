require('dotenv').config()
const express = require('express')
const app = express()
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require('cors')
const PORT = process.env.PORT || 4000
const routing = require('./routes/routes')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(routing)
    let users = [];

io.on("connection", function (socket) {
  console.log("a user connected");
  socket.on("createRoom", function () {
      console.log("emit fethroomUland dr server");
      io.emit("fetchRoomUlang");
  });
  socket.on("joinRoom", function(data) {
    socket.join(data.id);
    users.push(data.user)
    console.log("join ke room", data.user)
    io.emit("playerJoin", data.user)
  });
    socket.on("playGame", function() {
      io.emit("StartGame");
    });
})


http.listen(PORT, console.log('listening to the port '+ PORT))