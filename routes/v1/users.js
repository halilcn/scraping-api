import express from 'express'
import userController from '../../controllers/user-controller'
import userAuthActionValidation from '../../validations/user-auth-action-validation'

const router = express.Router()

router.post('/login', userAuthActionValidation, userController.login)
router.post('/register', userAuthActionValidation, userController.register)

export default router
