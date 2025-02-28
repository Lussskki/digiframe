import express from 'express'
const blogRouter = express.Router()

// The blog route
blogRouter.get('/', (req, res) => {
    // console.log('route is working')
    res.send('Welcome to the Blog Page! This is our project\'s  page.')
})

export default blogRouter
