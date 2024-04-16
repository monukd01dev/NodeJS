let {bookStore} = require('./bookStore');
const {Book} = require('./Book')


function addBook(book){
    if(book)
    bookStore.push(book);
}

function deleteBook(book){
    bookStore = bookStore.filter(({bookId})=> bookId!==book.bookId)
}

function findById(id) {
    return bookStore.find(({bookId})=>bookId==id);
}

function getAllBooks() {
    return bookStore;
}

module.exports = {
    addBook,
    deleteBook,
    getAllBooks,
    findById,
}

