require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000
const routing = require('./routes/routes')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(routing)

app.listen(PORT, console.log('listening to the port '+ PORT))