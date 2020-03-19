const router = require('express').Router()
const room = require('./room')
const user = require('./user')

router.use('/users',user)
router.use('/rooms', room)

module.exports = router