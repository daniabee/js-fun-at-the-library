function createTitle(title) {
  return title;
}

module.exports = {
  createTitle : function (title) {
    return title;
  },
  buildMainCharacter : function
  (newCharacterBuilt, newCharProperty, propertyValue) {
    return module.exports.newCharcaterBuilt = {
      newCharProperty : propertyValue ,
    };
  },
  saveReview : function (array,review) {
    return array.push(review);
  },
  calculatePageCount : function (title) {
    var count = 0;
    words = title.split("");
    for (var i = 0; i < words.length; i++) {
      count++;}
      return count * 20;
  },
  writeBook : function(bookProp){
    return bookProp
  },
  editBook : functgit ion(bookPageCount) {
    var count = booksPageCount/3;
    return count
  }
}
