
function shelfBook (book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook (book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == book){
      shelf.splice(i, 1);
    }
  }
  return shelf
}

function listTitles (shelf) {
  var list = []
  for (var i = 0; i < shelf.length; i++) {
    list.push(shelf[i].title)
  }
  return list.join(', ')
}

function searchShelf (shelf, book) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.toLowerCase() == book.toLowerCase()) {
      return true
    }
  }
  return false
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};



// npm test test/shelf-test.js
