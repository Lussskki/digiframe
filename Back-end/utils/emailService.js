import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Configure email sender (Gmail SMTP)
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

// Function to send an email notification
export const sendEmail = async (to, subject, text) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        }

        await transporter.sendMail(mailOptions)
        return true
    } catch (error) {
        return res.status(500).json({ message: 'Server error' })
        
    }
}
