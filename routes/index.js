import users from './v1/users'

module.exports = app => {
  app.use('/v1/users', users)
}
