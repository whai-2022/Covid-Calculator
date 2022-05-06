const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getBusinesses()
    .then((businesses) => {
      console.log(businesses)
      res.json(businesses)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
