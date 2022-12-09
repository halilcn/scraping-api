import auth from '../middlewares/auth'
import adverts from './v1/adverts'
import users from './v1/users'
import currentApi from '../controllers/current-api'

module.exports = app => {
  app.use('/api/v1/adverts', auth, adverts)
  app.use('/api/v1/users', users)

  app.use('/api', currentApi.index)
}
