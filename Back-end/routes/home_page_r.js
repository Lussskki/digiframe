import express from 'express'
const router = express.Router()

// The homepage route
router.get('/', (req, res) => {
    console.log('route is working')
    res.send('Welcome to the Home Page! This is our project\'s main page.')
})

export default router
