const express = require('express')
const app = express()
require("dotenv").config()
const mongoose = require('mongoose')
const home = require('./routes/homeRoutes')
const newArt = require('./routes/newArtRoutes')
const details = require('./routes/detailsRoutes')
const auth = require('./routes/authRoutes')
const passport = require('passport')
const profile = require('./routes/profileRoutes')
require('./config/googleStratigy')
mongoose.connect(process.env.DB_KEY,()=>{
    console.log('database is connected')
    app.listen(process.env.PORT,()=>{
        console.log('i am listening')
    })
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extand:true}))
app.use(express.json())

app.use(passport.initialize())


app.use('/',home)
app.use('/newArt',newArt)
app.use('/addit',newArt)
app.use('/details',details)
app.use('/auth',auth)
app.use('/profile',profile)
