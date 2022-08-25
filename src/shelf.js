
function shelfBook (book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook (name, shelf) {
  var index = shelf.indexOf(name);
  shelf = shelf.splice(index, 1);
    return shelf
}

function listTitles (shelf) {
  var list = []
  for (var i = 0; i < shelf.length; i++) {
    list.push((shelf[i].title))
  }
  return list
}

/* function searchShelf (shelf, name) {
    if (shelf.includes(name) === true) {
      return true;
    } else {
      return false;
    }
} */

function searchShelf (shelf, name) {
  for (var i = 0; i < shelf.length ; i++) {
    if(shelf[i].title == name) {
      return true
    } else {
      return false
    }
  }
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};



// npm test test/shelf-test.js
