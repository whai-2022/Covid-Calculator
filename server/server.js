const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/business', require('./routes/business'))
server.use('/api/v1/businesses', require('./routes/businesses'))
server.use('/api/v1/rating', require('./routes/rating'))

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
