import express from 'express'
import GetInTouchSchema from '../schemas/get_in_touch_schema.js'

const getInTouchRouter = express.Router()

// Post route to create a new "Get In Touch" entry
getInTouchRouter.post('/', async (req, res) => {
    try {
        const { fullName, email, subject, text } = req.body

        
        if (!fullName || !email || !subject || !text) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        
        const newEntry = new GetInTouchSchema({
            fullName,
            email,
            subject,
            text
        })

        // Save to the database
        await newEntry.save()
        
        res.status(201).json({ message: 'Your message has been submitted successfully' })
    } catch (error) {
        // Handle unique email error or other validation errors
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already exists' })
        } else {
            res.status(500).json({ message: 'An error occurred', error: error.message })
        }
    }
})

export default getInTouchRouter
