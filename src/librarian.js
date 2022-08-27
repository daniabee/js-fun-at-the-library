const {shelfBook, searchShelf, unshelfBook} = require("./shelf");

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;

    this.greetPatron =

    function greetPatron(patronName) {
      if (patronName == 'Amy') {
        return `Good morning, ${patronName}!`
      } else {
        return `Hello, ${patronName}!`
      }
    }

    this.findBook =

    function findBook(titleOfBook) {
      if (book.title == titleOfBook) {
        return `Yes, we have ${titleOfBook}`
      } else {
        return `Sorry, we do not have ${titleOfBook}`
      }
    }

    function shelfBook() {

    }



  }
}

module.exports = Librarian;
