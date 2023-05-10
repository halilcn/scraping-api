export default async (req, res, next, schema) => {
  try {
    await schema.validateAsync(req.body)
    next()
  } catch (err) {
    const errors = err.details.map(error => ({ message: error.message }))
    return res.status(422).json({ message: 'Invalid request', data: errors })
  }
}
