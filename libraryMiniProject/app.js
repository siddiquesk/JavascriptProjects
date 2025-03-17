let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

// Book constructor
class Book {
    constructor(title, author, numOfPages, readOrNot) {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.readOrNot = readOrNot;
    }
}

// Display books
const displayBooks = () => {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = myLibrary.map((book, index) => `
        <div class="book-card">
            <h2>Title: ${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>NumOfPages: ${book.numOfPages}</p>
            <p>Read Or Not: ${book.readOrNot}</p>
            <button data-index="${index}" onclick="removeBook(${index})">Remove</button>
        </div>
    `).join('');
};

// Remove book
const removeBook = (index) => {
    myLibrary.splice(index, 1);
    saveLibrary();
    displayBooks();
};

// Save library
const saveLibrary = () => {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};

// Add book
const addBook = (title, author, numOfPages, readOrNot) => {
    if (!myLibrary.some(book => book.title === title && book.author === author)) {
        myLibrary.push(new Book(title, author, numOfPages, readOrNot));
        saveLibrary();
        displayBooks();
    } else {
        showMessage("Book Already Exists!!");
    }
};

// Show message
const showMessage = (msg) => {
    const bookExistsComponent = document.getElementById('book-exists-component');
    bookExistsComponent.innerHTML = `<p>${msg}</p>`;
    setTimeout(() => bookExistsComponent.innerHTML = '', 1000);
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayBooks();

    document.getElementById('new-book-btn').onclick = () => {
        document.getElementById('book-form-container').style.display = 'block';
    };

    document.getElementById('book-form').onsubmit = (e) => {
        e.preventDefault();
        addBook(
            document.getElementById('title').value,
            document.getElementById('author').value,
            document.getElementById('pages').value,
            document.getElementById('readStatus').checked ? 'Read' : 'Not Read'
        );
        e.target.reset();
        document.getElementById('book-form-container').style.display = 'none';
    };
});