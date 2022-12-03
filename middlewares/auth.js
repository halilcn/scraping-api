import User from "../models/user"
import UserToken from "../models/user-token"

export default async (req, res, next) => {
    const { token } = req.headers

    const userToken = await UserToken.findOne({ token })
    if (!userToken) res.status(401).json({ message: 'invalid token' })

    const user = await User.findOne({ id: userToken.userId })
    req.user = user

    next();
}