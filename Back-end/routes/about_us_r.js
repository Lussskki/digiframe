import express from 'express'
const aboutUsRouter  = express.Router()

// The About us router
aboutUsRouter.get('/', (req, res) => {
    // console.log('route is working')
    res.send('Welcome to the About us! This is our project\'s page.')
})

export default aboutUsRouter
