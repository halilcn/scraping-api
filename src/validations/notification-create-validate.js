import Joi from 'joi'
import { NOTIFICATION } from '../constants'
import validationHandle from '../utils/validation-handle'

const schema = Joi.object().keys({
  type: Joi.string()
    .required()
    .valid(...Object.values(NOTIFICATION)),
  params: Joi.object().required(),
})

export default (...routerParams) => validationHandle(...routerParams, schema)
