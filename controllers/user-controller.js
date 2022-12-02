import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import User from '../models/user';

const login = asyncHandler(async (req, res, next) => { })

const register = asyncHandler(async (req, res, next) => {
    //const { password = 'test1', email = 'test2' } = req.body
    const password = 'test1'
    const email = 'test1@gmail.com'

    const saltForHash = bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(password, saltForHash)

    await User.create({ email, password: hashedPassword, })

    res.json({ test: 'asdsa' });
})

export default { login, register }
