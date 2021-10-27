const express = require('express')
const app = express()
require("dotenv").config()
const mongoose = require('mongoose')
const home = require('./routes/homeRoutes')
const newArt = require('./routes/newArtRoutes')
const details = require('./routes/detailsRoutes')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extand:true}))
app.use(express.json())

mongoose.connect(process.env.DB_KEY,()=>{
    console.log('database is connected')
    app.listen(process.env.PORT,()=>{
        console.log('i am listening')
    })
})

app.use('/',home)
app.use('/newArt',newArt)
app.use('/addit',newArt)
app.use('/details',details)


