import express from 'express'
import UserSchema from '../schemas/user_schema.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'


dotenv.config()

const forgetPassRouter = express.Router()

// Nodemailer Transporter (Fixed)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your Gmail from .env
    pass: process.env.EMAIL_PASS // App password from .env
  }
})

// Forgot Password Route
forgetPassRouter.post('/', async (req, res) => {
  const { email } = req.body

  try {
    const user = await UserSchema.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Generate JWT token (valid for 1 hour)
    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: '1h' })

    // Password reset link
    const resetLink = `http://localhost:5000/reset-password?token=${token}`

    // Send Email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset',
      text: `Click the link to reset your password: ${resetLink}`
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({ message: 'Reset link sent successfully', token })
  } catch (error) {
    console.log('Error sending email:', error)
    res.status(500).json({ error: 'Error sending email' })
  }
})

export default forgetPassRouter
