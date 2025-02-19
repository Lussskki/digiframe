import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'

const protectedRouter = express.Router()

// Protected route
protectedRouter.get('/', authMiddleware, (req, res) => {
  res.json({ message: `Welcome, user with ID: ${req.user.id}` })
})

export default protectedRouter
 