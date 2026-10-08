const authors = [
    { id: 1, name: "Bryan" }, 
    { id: 2, name: "Christian" }, 
    { id: 3, name: "Jacob" },
];

export async function getAuthorById(authorId) {
    return authors.find((author) => author.id === authorId);
};

export async function getAllAuthors() {
    return authors;
}

const books = [
    { id: 1, title: "The Lord of the Rings" },
    { id: 2, title: "The Hobbit" },
    { id: 3, title: "The Silmarillion" },
];

export async function getBookById(bookId) {
    return books.find((book) => book.id === bookId);
};

export async function getAllBooks() {
    return books;
}