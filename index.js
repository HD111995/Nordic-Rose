const express = require('express')
const app = express()
require("dotenv").config()
const mongoose = require('mongoose')
const Article = require('./models/Article')
const formidable = require('formidable')
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

app.get('/',(req,res)=>{
    Article.find()
    .then(results =>{
        console.log(results)
        res.render('index',{results})
    })
    .catch(err => console.log(err))
})


app.get('/newArt',(req,res)=>{
    Article.find()
    .then(results =>{
        console.log(results)
        res.render('newArt',{results})
    })
    .catch(err => console.log(err))
})


app.post('/addit', (req, res, next) => {
    const form = formidable({ multiples: true, uploadDir: './public/img', keepExtensions: true });
    console.log(req.body)
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err)
            next(err);
            return;
        }

        let Art = new Article({
            title: fields.title,
            url:files.url.path.slice(10),
            body: fields.body,
            author: fields.author,
            author_bild: fields.author_bild,
        })
    Art.save()
    .then(result => res.redirect('/newArt'))
    .catch(err => console.log(err))

    });
});