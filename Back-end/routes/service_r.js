import express from 'express'
const serviceRouter = express.Router()

// The service route
serviceRouter.get('/', (req, res) => {
    // console.log('route is working')
    res.send('Welcome to the Service Page! This is our project\'s  page.')
})

export default serviceRouter
