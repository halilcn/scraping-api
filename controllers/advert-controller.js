import asyncHandler from 'express-async-handler'
import Advert from '../models/advert'

const index = asyncHandler(async (req, res, next) => {
  const { query } = req
  const filter = {}

  if (query.status) filter.status = query.status
  // if (query.room) filter.room = query.room //TODO: room + encode problem
  if (query.city) filter.city = query.city
  if (query.district) filter.district = query.district
  if (query.furnitureStatus) filter.furnitureStatus = query.furnitureStatus
  if (query.company) filter.company = query.company
  if (query.minPrice && query.maxPrice) filter.price = { $gte: query.minPrice, $lte: query.maxPrice }
  if (query.minSquareMetres && query.maxSquareMetres) filter.squareMetres = { $gte: query.minSquareMetres, $lte: query.maxSquareMetres }
  if (query.minBuildingAge && query.maxBuildingAge) filter.buildingAge = { $gte: query.minBuildingAge, $lte: query.maxBuildingAge }
  if (query.minDate && query.maxDate) filter.createdAt = { $gte: query.minDate, $lte: query.maxDate }

  const adverts = await Advert.find(filter)

  res.json({ adverts })
})

export default { index }
