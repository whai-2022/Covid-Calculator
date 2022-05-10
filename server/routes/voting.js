const express = require('express')
const router = express.Router()
const db = require('../db')

router.patch('/thumbup', (req, res) => {
  const businessId = req.body.businessId
  db.addThumbUp(businessId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => res.status(500).send(err.message))
})

router.patch('/thumbdown', (req, res) => {
  const businessId = req.body.businessId
  db.addThumbDown(businessId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
