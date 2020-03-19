const router = require('express').Router()
const room = require('./room')
const user = require('./user')
const api = require('./api')

router.use('/users',user)
router.use('/rooms', room)
router.use('/api', api)

module.exports = router