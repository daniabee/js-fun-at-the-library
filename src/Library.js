const {shelfBook, searchShelf, unshelfBook} = require("./shelf");

// Create Library

function createLibrary(name, shelves = null) {
  var library = {
    name : name,
    shelves : {
      fantasy : [],
      fiction : [],
      nonFiction : [],
    }
  }
  return library
};

// Create Add book

function addBook (library, book) {
  switch (book.genre) {
    case 'fantasy':
      library.shelves.fantasy.push(book);
      break;
    case 'fiction' :
      library.shelves.fiction.push(book);
      break;
    case 'nonFiction':
      library.shelves.nonFiction.push(book);
      break;
    default: console.log(`try again`)
  }
};


// Create check out book

function checkoutBook(library, book, shelf) {
    if (shelf == 'fantasy') {

    for (var i = 0; i < library.shelves.fantasy.length; i++) {

      if (library.shelves.fantasy[i].title == book) {
        library.shelves.fantasy.splice(i, 1)
        return `You have now checked out ${book} from the ${library.name}`
    }
  }
}

  if (shelf == 'fiction') {

    for (var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title == book) {
        library.shelves.fiction.splice(i, 1)
        return `You have now checked out ${book} from the ${library.name}`
    }
  }
}

  if (shelf == 'nonFiction') {

    for (var i = 0; i < library.shelves.nonFiction.length; i++) {
      if (library.shelves.nonFiction[i].title == book) {
        library.shelves.nonFiction.splice(i, 1)
        return `You have now checked out ${book} from the ${library.name}`
      }
    }
  }

  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`

}

module.exports = {
createLibrary,
addBook,
checkoutBook
};
