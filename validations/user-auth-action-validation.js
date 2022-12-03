import Joi from "joi";
import validationHandle from "../utils/validation-handle";

const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export default (...routerParams) => validationHandle(...routerParams, schema)