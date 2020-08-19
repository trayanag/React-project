const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String,ObjectId, Date } = Schema.Types;

const postSchema = new Schema({

    title:{
        type:String,
        required:true
    },

    description: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required:true
    },

    content:{
        type: String,
        required: true
    },
    date1: {
        type:Date,
        required: true
    },
  
    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Posts', postSchema);