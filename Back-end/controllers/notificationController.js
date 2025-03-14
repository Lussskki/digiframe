import  User from '../schemas/user_schema.js'

// Update email alerts preference
export const updateEmailAlerts = async (req, res) => {
    try {
        const { email, enable } = req.body

        // Find the user by email
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ message: 'User not found' })

        // Update email alert settings
        user.notifications.emailAlerts = enable
        await user.save()

        res.json({ message: `Email alerts ${enable ? 'enabled' : 'disabled'}` })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

// Update Receive Promotional Emails setting
export const updatePromotionalEmails = async (req, res) => {
    try {
        const { email, enable } = req.body  // Get email and enable value from request
        
        const user = await User.findOne({ email })  // Find user by email
        if (!user) return res.status(404).json({ message: 'User not found' }) // If no user, return error
        
        // Update the "receivePromotionalEmails" setting inside the notifications object
        user.notifications.receivePromotionalEmails = enable
        await user.save() // Save changes to the database

        res.json({ message: 'Promotional emails setting updated' }) // Send response
    } catch (error) {
        res.status(500).json({ message: 'Server error' }) // Handle errors
    }
}

// Update Push Notifications setting
export const updatePushNotifications = async (req, res) => {
    try {
        const { email, enable } = req.body  // Get email and enable value from request
        
        const user = await User.findOne({ email })  // Find user by email
        if (!user) return res.status(404).json({ message: 'User not found' }) // If no user, return error
        
        // Update the "pushNotifications" setting inside the notifications object
        user.notifications.pushNotifications = enable
        await user.save() // Save changes to the database

        res.json({ message: 'Push notifications setting updated' }) // Send response
    } catch (error) {
        res.status(500).json({ message: 'Server error' }) // Handle errors
    }
}

// Update Weekly Summary setting
export const updateWeeklySummary = async (req, res) => {
    try {
        const { email, enable } = req.body  // Get email and enable value from request
        
        const user = await User.findOne({ email })  // Find user by email
        if (!user) return res.status(404).json({ message: 'User not found' }) // If no user, return error
        
        // Update the "weeklySummary" setting inside the notifications object
        user.notifications.weeklySummary = enable
        await user.save() // Save changes to the database

        res.json({ message: 'Weekly summary setting updated' }) // Send response
    } catch (error) {
        res.status(500).json({ message: 'Server error' }) // Handle errors
    }
}

// Update Security Alerts setting
export const updateSecurityAlerts = async (req, res) => {
    try {
        const { email, enable } = req.body  // Get email and enable value from request
        
        const user = await User.findOne({ email })  // Find user by email
        if (!user) return res.status(404).json({ message: 'User not found' }) // If no user, return error
        
        // Update the "securityAlerts" setting inside the notifications object
        user.notifications.securityAlerts = enable
        await user.save() // Save changes to the database

        res.json({ message: 'Security alerts setting updated' }) // Send response
    } catch (error) {
        res.status(500).json({ message: 'Server error' }) // Handle errors
    }
}