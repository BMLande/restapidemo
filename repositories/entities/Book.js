const mongoose = require('mongoose')

//define schema
const bookSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    author : {
        type : String,
        required : true
    }
} , { timestamps : true  });

// create a modal and export
const BookModel = mongoose.model('books' , bookSchema);
module.exports = BookModel;

