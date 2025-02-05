const getTheTitles = function(books) {

    // const books = [
    //     {
    //       title: 'Book',
    //       author: 'Name'
    //     },
    //     {
    //       title: 'Book2',
    //       author: 'Name2'
    //     }
    //   ]

    // const resultingTitles = [];
    // for (book of books) {
    //     resultingTitles.push(book.title);
    // }
    // return resultingTitles;

    // using map
    return books.map(book => book.title);

};

// Do not edit below this line
module.exports = getTheTitles;
