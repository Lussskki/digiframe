import express from 'express'
import UserSchema from '../schemas/user_schema.js'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'

import dotenv from 'dotenv'
dotenv.config()

const forgetPassRouter = express.Router()

// Forgot Password Route
forgetPassRouter.post('/forget-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate secure random token
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Save the token and expiration to the user's document
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    // Send reset email
    const resetLink = `http://localhost:5000/reset-password?token=${resetToken}`;
    await sendResetEmail(user.email, resetLink); // Ensure this line is executed

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.log(error); // Log the error
    res.status(500).json({ message: 'Something went wrong', error });
  }
});


// Reset Password Route
forgetPassRouter.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body

  try {
    const user = await UserSchema.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() } 
    })

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' })
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashedPassword

    // Clear the token and expiration fields
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined

    await user.save()

    res.status(200).json({ message: 'Password reset successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
})

// Function to send the reset email
async function sendResetEmail(email, resetLink) {
  console.log("Attempting to send reset email...")
  console.log("Email:", email)
  console.log("Reset Link:", resetLink)

  const user = await UserSchema.findOne({ email }).select('+emailServicePassword')

  if (!user) {
    throw new Error("User not found")
  }

  if (!user.emailServicePassword) {
    throw new Error("Email service password is missing")
  }

  const senderEmail = user.email
  const senderPassword = user.emailServicePassword

  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: senderEmail,
      pass: senderPassword
    }
  })

  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: "Password Reset Request",
    text: `You requested a password reset. Click the following link to reset your password: ${resetLink}`
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Password reset email sent successfully")
  } catch (error) {
    console.log("Error sending email:", error)
    throw new Error("Error sending reset email")
  }
}




export default forgetPassRouter
