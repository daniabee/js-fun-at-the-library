function createTitle(title, addidions = null) {
  if (addidions === null) {
  return title;
  } else {
  return additions;
  }
};

module.exports = {

  /* createTitle : function (title, additions = null) {
    if (additions === null) {
    return title;
    } else {
    return additions;
    }
  },*/

  createTitle : function (title) {
    return `The ${title}`;
  },

  buildMainCharacter : function (name, age, pronouns) {
    return module.exports.newCharcaterBuilt = {
      name : name ,
      age : age,
      pronouns : pronouns,
    };
  },

/*  saveReview : function (array, review) {
    if (array.includes(review) === false) {
      return array.splice(review.length, 0 , review)
    }
  },*/

  saveReview : function (review, array) {
      for (var i  = 0; i < array.length; i++) {
        if (array[i] != review) {
          array2 = [review];
          return array2.concat(array)
        }
      }
  },

  calculatePageCount : function (title) {
    var count = 0;
    words = title.split("");
    for (var i = 0; i < words.length; i++) {
      count++;}
      return count * 20;
  },

/*  writeBook : function(bookTitle, bookCharacter, genre){
    return book = {
      bookTitle : bookTitle,
      bookCharacter : bookCharacter,
      bookGenre : bookGenre,
    };
  },*/

  writeBook : function (property,value) {
    var book = module.exports.book[property]
    return book = value;
},

  editBook : function(pageCount) {
    var quarter = pageCount/4;
    var count = pageCount - quarter;
    return count
  }
}
