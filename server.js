const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const stampRoutes = require('./routes/stamps')

// initiate app
const app = express()

// execute middle-ware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // parse JSON
app.use(express.static(path.join(__dirname, "public")))  // create static public folder

// add cors

if (process.env.production) {
   whitelist = ['http://localhost:5173', 'https://stamp-collection-vue--keen-heliotrope-f222d1.netlify.app']
} else {
   whitelist = ['http://localhost:5173', 'https://stamp-collection-vue--keen-heliotrope-f222d1.netlify.app']
}

const corsOptions = {
   origin: whitelist
}

app.use(cors(corsOptions), express.static(path.join(__dirname, "public")))

// step through the routes in routes folder
app.use(cors(corsOptions), stampRoutes)

// catch all | send 404
app.use((req, res) => {
   res.status(404).send(`<h1>Not found <h1>`)

})


app.listen(3001);