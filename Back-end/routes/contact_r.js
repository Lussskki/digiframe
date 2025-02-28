import express from 'express'
const contactRouter = express.Router()

// The service route
contactRouter.get('/', (req, res) => {
    // console.log('route is working')
    res.send('Welcome to the Contact Page! This is our project\'s  page.')
})

export default contactRouter
