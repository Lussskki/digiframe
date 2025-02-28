import express from 'express'

const logoutRouter = express.Router()

logoutRouter.post('/', (req, res) => {
    res.clearCookie('refreshToken', 
        {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
        })
    return res.status(200).json({ message: 'Logged out successfully' })    
})

export default logoutRouter