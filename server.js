const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')
const stampRoutes = require('./routes/stamps')
const app = express()

// execute middle-ware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // parse JSON
app.use(express.static(path.join(__dirname, "public")))  // create static public folder

// step through the routes in routes folder
app.use(stampRoutes)

// catch all | send 404
// app.use((res, req, next) => {
//    res.status(404);

// })


app.listen(3001);