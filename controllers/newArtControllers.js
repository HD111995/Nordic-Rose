const formidable = require('formidable')
const Article = require('../models/Article')
const mongoose = require('mongoose')

const find_art = (req,res)=>{
    Article.find()
    .then(results =>{
        console.log(results)
        res.render('newArt',{results})
    })
    .catch(err => console.log(err))
}

const add_new =  (req, res, next) => {
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
}

module.exports = {find_art,add_new}