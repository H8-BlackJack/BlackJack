const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/', userController.register)
router.delete('/:id', userController.logout)

module.exports = router