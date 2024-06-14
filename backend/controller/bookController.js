const Book = require('../model/booksModel');
const AppError = require('../utils/appError');

exports.getOne = async (req , res , next) => {
    const book = await Book.findById(req.params.id)
console.log(book)
    if(!book){
        return next(new AppError('No Book found with that ID',404))
    }

    res.status(201).json({
        message : 'Success' ,
        data : {
            data : book
        }
    })
}

exports.getBooks = async( req , res , next) => {
    let query = Book.find()
    // paginate
    // const page = req.query.page * 1 || 1 ;
    // const limit = req.query.limit * 1 || 3 ;
    // const skip = (page - 1 ) * limit ;

    // query = query.skip(skip).limit(limit)

    const books = await query;

    if(!books){
        return next(new AppError('No books found.',404))
    }
    res.status(201).json({ message : 'Success' , data : books })
}

// exports.getBooksByTitle = async(req , res , next ) => {
//     const books = await Book.find({title : req.params.title});
//     // console.log(books)

//     if(!books){
//         return next(new AppError('No books found with that title.' , 404));
//     }

//     res.status(201).json({message : 'Success' , data : books })
// }

exports.createBook = async(req , res ) => {
    const book = await Book.create(req.body);
    
    console.log(req.body)
    res.status(201).json({message : 'Success' , data : {data : book } })
}

exports.updateBook = async (req , res ) => {
    const book = await Book.findByIdAndUpdate(req.params.id , req.body )
    if(!book){
        return next(new AppError('No book found with that ID',404));
    }

    res.status(201).json({ message : "Update success!" , data : { data : book }})
}

exports.deleteBook = async (req , res ) => {
    const book = await Book.findByIdAndDelete(req.params.id)

    if(!book){
        return next(new AppError('No book found with that ID',404))
    }

    res.status(204).json({ message : "Deleting success." , data : null })
}