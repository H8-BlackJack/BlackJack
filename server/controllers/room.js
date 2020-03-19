const { User, Room } = require('../models')

class RoomController {
  static get(req, res, next) {
    Room
      .findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
  static add(req, res, next) {
    const { name } = req.body
    Room
      .create({
        name
      })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static destroy(req, res, next) {
    Room
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        if (!data) {
          res.status(404).json({
            status: 404,
            msg: 'Data not found.'
          })
        } else {
          res.status(200).json({ msg: 'Room has been deleted.' })
        }
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = RoomController