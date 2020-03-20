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

let allUsers = {}

io.on("connection", function (socket) {
  console.log("A new user just connected!");

  socket.on('new-client', userData => {
    // Updating all connected client data using unique Socket ID //
    allUsers[socket.id] = userData

    socket.emit('user-connected', userData)
    console.log(`${userData.data} is now connected!`)

    io.emit('all-users', {allUsers: allUsers, userData: userData})
    console.log('Server now has:', allUsers)
  });
  
  socket.on("createRoom", function () {
      console.log("emit fetchRoomUlang from server");
      io.emit("fetchRoomUlang");
  });
  socket.on("joinRoom", function(id) {
    socket.join(id);
  });
})


http.listen(PORT, console.log('listening to the port '+ PORT))