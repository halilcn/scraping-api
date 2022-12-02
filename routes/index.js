import adverts from './v1/adverts'
import users from './v1/users'

module.exports = app => {
  app.use('/v1/adverts', adverts)
  app.use('/v1/users', users)
}
