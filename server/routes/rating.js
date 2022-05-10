const express = require('express')
const db = require('../db')
const router = express.Router()

router.post('/', (req, res) => {
  db.updateRating(req.body)
    .then((respose) => {
      res.json(respose)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
