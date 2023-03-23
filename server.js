const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')
const stampRoutes = require('./routes/stamps')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))

app.use('/', stampRoutes)

app.listen(3001);