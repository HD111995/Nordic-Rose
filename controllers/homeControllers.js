const Article = require('../models/Article')
const mongoose = require('mongoose')
const find_art = (req,res)=>{
    Article.find()
    .then(results =>{
        console.log(results)
        res.render('index',{results})
    })
    .catch(err => console.log(err))
}

module.exports = find_art