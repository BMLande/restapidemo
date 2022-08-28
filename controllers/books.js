const book = require('../services/book');
const bookService = require('../services/book');

module.exports = {
    add: async (req, res, next) => {    
        try {
            const { name, author } = req.body;
            // prepare obejct for applying business logic
            const book = {
                name,  
                author
            };
            // call service update Business logic
            await bookService.addBook(book);
            //respond the result
            res.status(200).json({
                message: 'Book added!'
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },

    get: async (req, res, next) => {
        try {
            const { id } = req.params;
            console.log(id);
            const book = await bookService.getBook(id);
            if (!book) {
                res.status(200).json({
                    message: 'Book Not found with provided id!',
                    book : book
                }); 
            }else{
                res.status(200).json({
                    message: 'Book found with provided id!',
                    book : book
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },

    update: async (req, res, next) => {
        try {
            const { name, author , _id } = req.body;
            // prepare obejct for applying business logic
            const book = {
                name,  
                author,
                _id
            };
            // call service update Business logic
            await bookService.updateBook(book);
            //respond the result
            res.status(200).json({
                message: 'Book updated!'
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },

    del: async (req, res, next) => {
        try {
            const { id } =  req.params;
            await bookService.delBook(id);
            res.status(200).json({
                message: 'Book deleted!'
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },
}