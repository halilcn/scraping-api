import express from 'express'

const router = express.Router()

router.get('/test', function (req, res, next) {
  res.json({ test: 'test 123' })
})

export default router
