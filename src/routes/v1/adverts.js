import express from 'express'
import advertController from '../../controllers/advert-controller'
import advertQueryValidate from '../../validations/advert-query-validate'

const router = express.Router()

router.get('/', advertQueryValidate, advertController.index)

export default router
