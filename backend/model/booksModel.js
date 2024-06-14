const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : String ,
    author : String ,
    status  : String ,
    checkout_date : Date
})

const Book = mongoose.model('Book',bookSchema)
module.exports = Book ;