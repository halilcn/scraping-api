import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user'
import UserToken from '../models/user-token'

const login = asyncHandler(async (req, res, next) => {
    const { password, email } = req.body

    const user = await User.findOne({ email })

    const isCorrectPassword = await bcrypt.compareSync(password, user?.password || '')
    if (!isCorrectPassword) return res.status(400).json({ message: 'user does not exist' });

    const token = jwt.sign({ test: 'asd' }, process.env.JWT_TOKEN)
    await UserToken.deleteOne({ userId: user.id })
    await UserToken.create({ userId: user.id, token })

    res.status(201).json({ data: { token }, message: 'created' })
})

const register = asyncHandler(async (req, res, next) => {
    const { password, email } = req.body

    const saltForHash = await bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(password, saltForHash)

    await User.create({ email, password: hashedPassword, })

    res.status(201).json({ message: 'created' });
})

export default { login, register }
