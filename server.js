const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const path = require('path')
const stampRoutes = require('./routes/stamps')
const app = express()

// execute middle-ware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // parse JSON
app.use(express.static(path.join(__dirname, "public")))  // create static public folder
app.use((req, res, next) => {
res.set('Access-Control-Allow-Origin', '*');
next();

})

// step through the routes in routes folder
app.use(stampRoutes)

// catch all | send 404
app.use((req, res) => {
   res.status(404).send(`<h1>Not found <h1>`)

})


app.listen(3001);