const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({

    bookName: String,
    hauther : String
})

module.exports.booksSchema = mongoose.model('Book', booksSchema)