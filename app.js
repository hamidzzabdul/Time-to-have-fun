const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()

const placesRouter = require('./Routes/placesRoutes')
const viewRouter = require('./Routes/viewRouter')
const userRouter = require('./Routes/userRouter')

// body and cookie parser
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());





// serving static files
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// render using pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.use('/', viewRouter)
// api
app.use('/api/v1/places', placesRouter)
app.use('/api/v1/users', userRouter)
module.exports = app