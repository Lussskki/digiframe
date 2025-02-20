import express from 'express'
const settingsRouter = express.Router()

// The service route
settingsRouter.get('/', (req, res) => {
    // console.log('route is working')
    res.send('Welcome to the Settings Page! This is our project\'s  page.')
})

export default settingsRouter
