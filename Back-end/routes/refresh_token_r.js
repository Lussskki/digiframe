import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const refreshRouter = express.Router()

refreshRouter.post('/', (req, res) => {
    // Pull out Refresh Token
    const refreshToken = req.cookies?.refreshToken

    // If not exsits give Unauthorized
    if (!refreshToken) {
        return res.status(401).json({ message: 'No refresh token, authorization denied' })
    }

    try {
        // JWT validation
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET)

        // New access token generation
        const accessToken = jwt.sign({ userId: decoded.userId }, process.env.SECRET, { expiresIn: '1h' })

        // Response – Returning new Access Token
        return res.status(200).json({ accessToken })
    } catch (err) {
        return res.status(403).json({ message: 'Invalid refresh token' })
    }
})

export default refreshRouter
