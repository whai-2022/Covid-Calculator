const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/:id', (req, res) => {
  db.getBusinessById(req.params.id)
    .then((business) => {
      res.json(business)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
