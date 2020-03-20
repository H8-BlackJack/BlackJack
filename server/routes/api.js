const router = require('express').Router()
const { User, Room } = require('../models')
const axios = require('axios')

router.post('/', (req, res, next) => {
  const { idRoom } = req.body
  console.log(req.body)
  Room
    .findOne({
      where: {
        id: idRoom
      }
    })
    .then(data => {
      console.log(data, 'ini data rooms')
      return axios({
        method: "GET",
        url: `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`
      })
    })
    .then(data => {
      res.status(200).json(data.data)
    })
    .catch(err => {
      console.log("errrrrrrrrr", err);

      res.status(400).json("Error Draw a card!")
    })

})



module.exports = router