import express from 'express'
const homeRouter = express.Router()

// The homepage route
homeRouter.get('/', (req, res) => {
    // console.log('route is working')
    res.send('Welcome to the Home Page! This is our project\'s main page.')
})

export default homeRouter
