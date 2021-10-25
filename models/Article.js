const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    url:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    published_at:{
        type:Date,
        required:false,
    },
    duration:{
        type:Number,
        required:false,
    },
    author:{
        type:String,
        required:true,
    },
    author_bild:{
        type:String,
        required:false
    }
},{timestamps:true})

const Article = mongoose.model('ArticleDBS',articleSchema);

module.exports = Article