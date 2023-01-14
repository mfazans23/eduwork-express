const express = require('express')
const serverless = require('serverless-http')
const router = require('./routes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')

const app = express()

app.use(express.json())

app.use('/.netlify/functions/api', router)

app.use(notFound)
app.use(errorHandler)

module.exports.handler = serverless(app)
