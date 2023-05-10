import asyncHandler from 'express-async-handler'
import Notification from '../models/notification'

const create = asyncHandler(async (req, res, next) => {
  const { type, params } = req.body

  await Notification.create({ userId: req.user._id, type, params })

  res.status(201).json({ message: 'created' })
})

export default { create }
