const express = require('express')
const router = express.Router()

const db = require('../db/business')

router.get('/', (req, res) => {
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
