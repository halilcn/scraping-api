import asyncHandler from 'express-async-handler'
import Advert from '../models/advert'

const index = asyncHandler(async (req, res, next) => {
  const adverts = await Advert.find({})
  res.json({ adverts })
})

export default { index }