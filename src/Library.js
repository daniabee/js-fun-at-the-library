const { shelfBook, searchShelf, unshelfBook } = require("./shelf");

function createLibrary(name, shelves = null) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(library, book) {
  switch (book.genre) {
    case "fantasy":
      library.shelves.fantasy.push(book);
      break;
    case "fiction":
      library.shelves.fiction.push(book);
      break;
    case "nonFiction":
      library.shelves.nonFiction.push(book);
      break;
    default:
      console.log(`try again`);
  }
}

function checkoutBook(library, book, shelf) {
  let search = searchShelf(library.shelves[shelf], book);
  if (search === true) {
    index = library.shelves[shelf].indexOf(book);
    library.shelves[shelf].splice(index, 1);
    return `You have now checked out ${book} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
};
