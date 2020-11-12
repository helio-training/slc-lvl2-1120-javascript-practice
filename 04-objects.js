const bookObject = { 
    title: "Green Eggs and Ham",
    isbn: "978-0-394-80016-5",
    author: "Dr. Seuss",
    print: function () { 
        console.log(`${this.title} by ${this.author}`)
    }
}

console.log(bookObject.isbn);
bookObject.print();
console.log(bookObject.date);
bookObject.date = 'August 12, 1960';
console.log(bookObject.date);

const titleString = 'title';
console.log(bookObject[titleString]); // Computed Property
console.log(bookObject.title);