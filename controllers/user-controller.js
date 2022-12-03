import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import User from '../models/user';

const login = asyncHandler(async (req, res, next) => { })

const register = asyncHandler(async (req, res, next) => {
    //const { password = 'test1', email = 'test2' } = req.body //TODO: !
    const password = 'test1'
    const email = 'test12@gmail.com'

    const saltForHash = await bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(password, saltForHash)

    await User.create({ email, password: hashedPassword, })

    res.status(201).json({ message: 'created' });
})

export default { login, register }
