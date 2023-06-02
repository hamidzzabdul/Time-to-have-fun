const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const placesRouter = require('./Routes/placesRoutes')

app.use(bodyParser.json())


// serving static files
app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use('/api/v1/places', placesRouter)
module.exports = app