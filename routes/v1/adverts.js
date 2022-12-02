import express from 'express'
import advertController from '../../controllers/advert-controller'

const router = express.Router()

router.get('/', advertController.index)

export default router
