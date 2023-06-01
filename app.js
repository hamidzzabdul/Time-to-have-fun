const express = require('express')

const app = express()

// serving static files
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

module.exports = app