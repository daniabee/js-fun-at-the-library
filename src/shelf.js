function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  shelf.forEach((element) => {
    if (element.title == book) {
      shelf.splice(shelf.indexOf(element), 1);
    }
  });
  return shelf;
}

function listTitles(shelf) {
  var list = [];
  shelf.forEach((element) => {
    list.push(element.title);
  });
  return list.join(", ");
}

function searchShelf(shelf, book) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.toLowerCase() == book.toLowerCase()) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
