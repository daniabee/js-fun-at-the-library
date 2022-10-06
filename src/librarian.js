const { shelfBook, searchShelf, unshelfBook } = require("./shelf");
const { checkoutBook, addBook } = require("./Library");

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.greetPatron = function greetPatron(patronName) {
      if (patronName == "Amy") {
        return `Good morning, ${patronName}!`;
      } else {
        return `Hello, ${patronName}!`;
      }
    };
  }

  findBook(titleOfBook) {
    if (searchShelf(this.library.shelves["fantasy"], titleOfBook)) {
      checkoutBook(this.library, titleOfBook, "fantasy");
      return `Yes, we have ${titleOfBook}`;
    } else if (searchShelf(this.library.shelves["fiction"], titleOfBook)) {
      checkoutBook(this.library, titleOfBook, "fiction");
      return `Yes, we have ${titleOfBook}`;
    } else if (searchShelf(this.library.shelves["nonFiction"], titleOfBook)) {
      checkoutBook(this.library, titleOfBook, "nonFiction");
      return `Yes, we have ${titleOfBook}`;
    } else {
      return `Sorry, we do not have ${titleOfBook}`;
    }
  }

  calculateLateFee(days) {
    return Math.ceil(days * 0.25);
  }
}

module.exports = Librarian;
