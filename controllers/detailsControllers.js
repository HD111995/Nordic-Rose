const Article = require('../models/Article')
const mongoose = require('mongoose')

const find_byId = (req,res)=>{
    Article.findById(req.params.id)
    .then(result =>{
        Article.find()
        .then(results => res.render('details',{result,results}))
        .catch(err => console.log(err))
        
    })
    .catch(err => console.log(err))
}

module.exports = find_byId