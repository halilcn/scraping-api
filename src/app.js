import createError from 'http-errors'
import express from 'express'

const app = express()

require('./middlewares/bootstrap-middleware')(app)
require('./routes')(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  const errorRes = {}

  errorRes.message = err.message
  if (req.app.get('env') === 'development') {
    errorRes.error = err
  }

  // return error response
  res.status(err.status || 500).json(errorRes)
})

module.exports = app
