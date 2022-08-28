const { find , insert , update , deleteBook } = require('../repositories/bookRepo');


module.exports = {

    addBook : async(book)=>{
        return await insert(book);
    },

    getBook : async(bookId)=>{
        return await find(bookId);
    },

    updateBook : async(book)=>{
        return await update(book)
    },

    delBook : async(bookId)=>{
        return deleteBook(bookId);
    }
}