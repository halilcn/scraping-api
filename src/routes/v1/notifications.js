import express from 'express'
import notificationController from '../../controllers/notification-controller'
import notificationCreateValidate from '../../validations/notification-create-validate'

const router = express.Router()

router.post('/', notificationCreateValidate, notificationController.create)
router.get('/', notificationController.index)

export default router
