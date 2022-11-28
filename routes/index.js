import adverts from './v1/adverts'

module.exports = app => {
  app.use('/v1/adverts', adverts)
}
