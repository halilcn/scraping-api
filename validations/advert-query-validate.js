import Joi from "joi";
import { SCRAPING_COMPANIES } from "../constants";
import validationHandle from "../utils/validation-handle";

const STATUS_VALID = ["satılık", "kiralık"]
const FURNITURE_STATUS_VALID = ["eşyalı değil", "eşyalı"]
const roomCustomValidate = (value, helper) => {
    const splittedValue = value.split(' ')

    if (!Number.isInteger(parseInt(splittedValue[0])) || !Number.isInteger(parseInt(splittedValue[splittedValue.length - 1]))) {
        return helper.message("the field must be like '3 + 1' format");
    }

    return value
}

//TODO: update 
const schema = Joi.object().keys({
    status: Joi.string().valid(...STATUS_VALID),
    room: Joi.string().custom(roomCustomValidate),
    city: Joi.string(),
    district: Joi.string(),
    furnitureStatus: Joi.string().valid(...FURNITURE_STATUS_VALID),
    minPrice: Joi.when('maxPrice', { is: Joi.number().integer(), then: Joi.number().integer().required() }),
    maxPrice: Joi.when('minPrice', { is: Joi.number().integer(), then: Joi.number().integer().required() }),
    //  minSquareMetres: Joi.number().integer().when('maxSquareMetres', { is: Joi.number().integer(), then: Joi.required() }),
    //  maxSquareMetres: Joi.number().integer().when('minSquareMetres', { is: Joi.number().integer(), then: Joi.required() }),
    //  minBuildingAge: Joi.number().integer().when('maxBuildingAge', { is: Joi.number().integer(), then: Joi.required() }),
    //  maxBuildingAge: Joi.number().integer().when('minBuildingAge', { is: Joi.number().integer(), then: Joi.required() }),
    //  company: Joi.string().valid(...SCRAPING_COMPANIES)
})

export default (req, ...routerParams) => {
    req.body = req.query;
    return validationHandle(req, ...routerParams, schema)
}