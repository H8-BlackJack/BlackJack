const { User, Room } = require('../models')
const axios = require('axios')

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
    axios({
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    })
      .then(({ data }) => {
        const deckId = data.deck_id
        console.log(deckId)
        return Room.create({
          name,
          deck_id: deckId
        })
      })
      .then(data => {
        console.log(data)
        res.status(201).json(data)
      })
      .catch(({ response }) => {
        console.log(response)
      })
    // try {
    //   const { name } = req.body
    //   let { data } = await axios({
    //     url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    //   })
    //   let response = await Room
    //     .create({
    //       name,
    //       deck_id: data.deck_id
    //     })
    //   console.log(data);

    //   res.status(201).json(response)
    // } catch (error) {
    //   res.status(400).json(error)
    // }
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