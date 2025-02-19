import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Routers
import homeRouter from './routes/home_page_r.js'
import signupRouter from './routes/signup_r.js'
import loginRouter from './routes/login_r.js'
import aboutUsRouter from './routes/about_us_r.js'
import serviceRouter from './routes/service_r.js'
import portfolioTeamRouter from './routes/portfolio_team_r.js'
import blogRouter from './routes/blog_r.js'
import getInTouchRouter from './routes/get_in_touch_r.js'
import contactRouter from './routes/contact_r.js'
import protectedRouter from './routes/protected_r.js'
// Not working import forgetPassRouter from './routes/forget_password_r.js'


// Environment variables
dotenv.config()


const app = express()
const PORT = process.env.PORT || 3000

const corsOptions = {
    origin: "*", 
    credentials: true, 
} 

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tp89p.mongodb.net/`

// Routes to access
app.use('/', homeRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/aboutus', aboutUsRouter)
app.use('/service', serviceRouter)
app.use('/portfolioTeam', portfolioTeamRouter)
app.use('/blog', blogRouter)
app.use('/get-in-touch', getInTouchRouter)
app.use('/contact', contactRouter)
app.use('/protected', protectedRouter)
// Not working app.use('/api/', forgetPassRouter)

// Database connection
mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
        console.log("Error", error.message)
        process.exit(1)
    })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
