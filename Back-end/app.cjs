const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT

const corsOptions = {
    origin: "*", 
    credentials: true, 
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

const DBPass = process.env.DB_USER_PASS

const url = `mongodb+srv://webcanvas555:${DBPass}@cluster0.l4wf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose
    .connect(url)
    .then(()=> console.log("MongoDB connected"))
    .catch((error)=>{
        console.log("Error",error.message);
        process.exit(1)
    })

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`)
  })