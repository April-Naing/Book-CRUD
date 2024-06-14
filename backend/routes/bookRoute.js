const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

// router.get('/' , bookController.getBooks );

router.route('/')
    .get(bookController.getBooks)
    .post(bookController.createBook);


router.route('/:id')
    .get(bookController.getOne)
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook);

module.exports = router ;