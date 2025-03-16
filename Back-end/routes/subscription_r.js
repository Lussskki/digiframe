import express from 'express'
import { createSubscription, getSubscription, updateSubscription, cancelSubscription } from '../controllers/subscriptionController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const subscriptionRouter = express.Router()

subscriptionRouter.post('/create', authMiddleware, createSubscription) // Create subscription
subscriptionRouter.get('/review', authMiddleware, getSubscription) // Review current subscription
subscriptionRouter.put('/update', authMiddleware, updateSubscription) // Update subscription plan
subscriptionRouter.delete('/cancel/', authMiddleware, cancelSubscription) // Cancel subscription

export default subscriptionRouter
