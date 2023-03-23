const express = require('express');
const bodyParser = require('body-parser');
const stampRoutes = require('./routes/stamps')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', stampRoutes)

app.listen(3001);