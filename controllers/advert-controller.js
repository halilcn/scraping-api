import Advert from '../models/advert'

const test = async (req, res, next) => {
  const testRes = await Advert.find({})
  res.json(testRes)
}

export default { test }
