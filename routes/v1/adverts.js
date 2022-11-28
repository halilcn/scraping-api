import express from 'express'
import advertController from '../../controllers/advert-controller'

const router = express.Router()

router.get('/test', advertController.test)

export default router
