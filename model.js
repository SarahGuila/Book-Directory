const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({

    bookName: String,
    hauther : String
})

module.exports.Book = mongoose.model('book', booksSchema)