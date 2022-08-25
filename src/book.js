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
  
  saveReview : function (newReview , array) {
    if (array.includes(newReview) === false) {
      return array.push(newReview);
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

/*  writeBook : function (property,value) {
    var book = module.exports.book
    return book.property = value;
}, */

  writeBook : function (property,value) {
    return module.exports.newBook = {
      property : value ,
    }
  },

  editBook : function(pageCount) {
    var quarter = pageCount/4;
    var count = pageCount - quarter;
    return count
  }
}
