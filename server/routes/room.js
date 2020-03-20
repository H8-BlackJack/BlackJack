const router = require('express').Router()
const roomController = require('../controllers/room')

router.get('/', roomController.get)
router.post('/', roomController.add)
router.delete('/:id', roomController.destroy)


module.exports = router