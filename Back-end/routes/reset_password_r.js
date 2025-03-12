import express from 'express'
import UserSchema from '../schemas/user_schema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


import dotenv from 'dotenv'
dotenv.config()


const resetPassRouter = express.Router()

// Reset Password Route
resetPassRouter.post('/', async (req, res) => {
  const { token, newPassword } = req.body

  try {
    // Verify JWT Token
    const decoded = jwt.verify(token, process.env.SECRET)
    const email = decoded.email

    // Find User
    const user = await UserSchema.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Hash New Password
    const hashedPassword = await bcrypt.hash(newPassword, 10)

    // Update Password
    await UserSchema.updateOne({ email }, { password: hashedPassword })

    res.status(200).json({ message: 'Password reset successfully' })
  } catch (error) {
    console.log('Error:', error)
    res.status(400).json({ error: 'Invalid or expired token' })
  }
})

export default resetPassRouter
