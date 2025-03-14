import express from 'express'
import { updateEmailAlerts, 
        updatePromotionalEmails, 
        updatePushNotifications, 
        updateWeeklySummary, 
        updateSecurityAlerts } from '../controllers/notificationController.js'

const notificationRouter = express.Router()

// Route to enable/disable email alerts
notificationRouter.post('/email-alerts', updateEmailAlerts)

// Route for updating promotional email setting
notificationRouter.post('/promotional-emails', updatePromotionalEmails)

//  Route for updating Push Notifications
notificationRouter.post('/push-notifications', updatePushNotifications)

//  Route for updating Weekly Summary
notificationRouter.post('/weekly-summary', updateWeeklySummary)

//  Route for updating Security Alerts
notificationRouter.post('/security-alerts', updateSecurityAlerts)

export default notificationRouter
