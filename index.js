const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use('/api/user', require('./routes/user'))
app.use('/api/post', require('./routes/post'))

app.listen(3131, () => {
  console.log('Listening on port 3131')
})
