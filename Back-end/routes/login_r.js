import UserSchema from '../schemas/user_schema.js'
import express from 'express'
import bcrypt from 'bcrypt'
import { generateAccessToken, generateRefreshToken } from '../utils/jwtUtils.js'

import dotenv from 'dotenv'
dotenv.config()

const loginRouter = express.Router()

// Login route
loginRouter.post('/', async (req, res) => {
    const { email, password, rememberMe} = req.body

    if (!email || !password) {
        return res.status(400).json({ message: `Both email and password are required` })
    }

    try {
        // Find user by email
        const user = await UserSchema.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: `Not found email or password` })
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: `Invalid email or password` })
        }

        // Generate JWT tokens
        const accessToken = generateAccessToken(user._id)
        const refreshToken = generateRefreshToken(user._id, rememberMe)

        // Secure cookie for refresh token
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000
        })

        return res.status(200).json({ message: `Login successful`, accessToken })
    } catch (err) {
        console.error('❌ Error during login:', err)
        return res.status(500).json({ message: `Error during login`, error: err.message })
    }
})

export default loginRouter