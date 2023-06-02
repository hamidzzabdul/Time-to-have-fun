const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const placesRouter = require('./Routes/placesRoutes')
const viewRouter = require('./Routes/viewRouter')
app.use(bodyParser.json())


// serving static files
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// render using pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.use('/', viewRouter)
// api
app.use('/api/v1/places', placesRouter)
module.exports = app