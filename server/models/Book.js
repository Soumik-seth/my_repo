const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    title:String,
    author:String,
    img:String,
    status:{type:String,default:"Available"},
    borrowedBy:{type:String,default:""}
});
module.exports = mongoose.model('Book', Schema);