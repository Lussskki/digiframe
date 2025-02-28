import express from 'express'
const portfolioTeamRouter = express.Router()

// The service route
portfolioTeamRouter.get('/', (req, res) => {
    // console.log('route is working')
    res.send('Welcome to the Portfolio Team Page! This is our project\'s  page.')
})

export default portfolioTeamRouter
