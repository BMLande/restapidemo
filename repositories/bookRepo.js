const mongoose = require('mongoose');
const book = require('../services/book');
const BookModel = require('./entities/Book');

module.exports ={
    find : async(bookId)=>{
       try {
        return await BookModel.findOne(
            { _id : mongoose.Types.ObjectId(bookId.toString())
        });
       } catch (error) {
        console.log(error);
        throw new Error(error.message);
       }
    },

    insert : async(book) => {
        console.log('bok datra::' , book);
        try {
            const bookModal = new BookModel({
                name : book.name,
                author: book.author
            });
            await bookModal.save();
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    },

    update : async(book) =>{
        try {
            await BookModel.findByIdAndUpdate({ _id : book._id }, { $set : { name : book.name , author : book.author } });    
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteBook : async(bookId) => {
        try {
            await BookModel.remove({ _id : bookId });
        } catch (error) {
            throw new Error(error.message);
        }
    }   
}