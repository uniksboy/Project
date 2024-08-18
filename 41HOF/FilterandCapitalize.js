const books = [
    { title: "Book A", author: "author one", year: 2011 },
    { title: "Book B", author: "author two", year: 2009 },
    { title: "Book C", author: "author three", year: 2015 }
];

const filteredAndCapitalizedBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({
        ...book,
        author: book.author.toUpperCase()
    }));

console.log(filteredAndCapitalizedBooks);
