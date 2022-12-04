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

const schema = Joi.object().keys({
    status: Joi.string().valid(...STATUS_VALID),
    room: Joi.string().custom(roomCustomValidate),
    city: Joi.string(),
    district: Joi.string(),
    furnitureStatus: Joi.string().valid(...FURNITURE_STATUS_VALID),
    company: Joi.string().valid(...SCRAPING_COMPANIES),
    minPrice: Joi.number().integer(),
    maxPrice: Joi.number().integer(),
    minSquareMetres: Joi.number().integer(),
    maxSquareMetres: Joi.number().integer(),
    minBuildingAge: Joi.number().integer(),
    maxBuildingAge: Joi.number().integer(),
    minDate: Joi.string(),
    maxDate: Joi.string(),
})

export default (req, ...routerParams) => {
    req.body = req.query;
    return validationHandle(req, ...routerParams, schema)
}