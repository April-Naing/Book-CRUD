const fs = require('fs/promises');

async function getStoredBooks(){
    const rawFileContent = await fs.readFile('Books.json' , { encoding : 'utf-8'}) ;
    const data = JSON.parse(rawFileContent);
    const storedBooks = data.books ?? [];
    return storedBooks ;
}

function storeBooks(book){
    return fs.writeFile('Books.json' , JSON.stringify({ books : book || []}));
}

exports.getStoredBooks = getStoredBooks ;
exports.storeBooks = storeBooks ;