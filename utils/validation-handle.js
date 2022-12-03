export default async (req, res, next, schema) => {
    const data = { email: 'test@gmail.com', password: 'test1' } //TODO: !

    try {
        await schema.validateAsync(data);
        next()
    } catch (err) {
        const errors = err.details.map(error => ({ message: error.message }))
        res.status(422).json({ message: 'Invalid request', data: errors })
    }
}