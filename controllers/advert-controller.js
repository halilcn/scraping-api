import asyncHandler from 'express-async-handler'
import Advert from '../models/advert'

const index = asyncHandler(async (req, res, next) => {
  //TODO: tek tek aktarma yapılması?
  //TODO: room + encode problem

  const { query } = req
  const filter = {}

  if (query.status) filter.status = query.status
  if (query.room) filter.room = query.room
  if (query.city) filter.city = query.city
  if (query.district) filter.district = query.district
  if (query.furnitureStatus) filter.furnitureStatus = query.furnitureStatus
  if (query.company) filter.company = query.company

  console.log(filter);

  const adverts = await Advert.find(filter)
  res.json({ adverts })
})

export default { index }
