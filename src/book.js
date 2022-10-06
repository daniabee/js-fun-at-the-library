function createTitle(title, additions = null) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return (newCharcaterBuilt = {
    name: name,
    age: age,
    pronouns: pronouns,
  });
}

function saveReview(newReview, array) {
  if (array.includes(newReview) === false) {
    return array.push(newReview);
  }
}

function calculatePageCount(title) {
  var count = 0;
  words = title.split("");
  words.forEach((element) => {
    count++;
  });
  return count * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return (newBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle),
  });
}

function editBook(book) {
  book.pageCount = (book.pageCount / 4) * 3;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
