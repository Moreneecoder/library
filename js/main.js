/* eslint no-use-before-define: ["error", { "functions": false }] */

const myLibrary = [];
const images = ['book1.svg', 'book2.svg', 'book3.svg', 'book4.svg', 'book5.svg', 'book6.svg'];

function Book(title, author, numOfPages, status) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.status = status;
}

Book.prototype.toggleReadStatus = function () {
  if (this.status === 'Read') {
    this.status = 'Unread';
  } else if (this.status === 'Unread') {
    this.status = 'Read';
  }

  return this.status;
};

const getTemplate = (book, bookId) => `<div class="col-6 col-md-4 col-lg-3 card p-2 book text-center" data-id=${bookId}>
    <img class="img-fluid mb-1" src="./images/${images[Math.floor(Math.random() * 6)]}" alt="">
    <h4 class="text-success m-0">${book.title}</h4>
    <p class="m-0 fw-bolder">${book.author}</p>
    <small class="text-muted">${book.numOfPages} pages</small>

    <button class="btn btn-info text-white btn-small toggle-read mb-1">${book.status}</button>
    <button class="btn btn-danger btn-small remove-book">Remove</button>
    </div>`;

const addToggleReadEvent = () => {
  const readButtons = document.querySelectorAll('.toggle-read');

  readButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const bookId = button.parentElement.getAttribute('data-id');

      const book = myLibrary[bookId];
      button.textContent = book.toggleReadStatus();
    });
  });
};

/* eslint-disable no-use-before-define */
const displayBooks = () => {
  let bookList = '';
  let count = 0;

  myLibrary.forEach((book) => {
    bookList += getTemplate(book, count);
    count += 1;
  });

  document.querySelector('.book-list').innerHTML = bookList;

  addRemoveFromLibrary();
  addToggleReadEvent();
};

const addRemoveFromLibrary = () => {
  const removeButtons = document.querySelectorAll('.remove-book');

  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const bookId = button.parentElement.getAttribute('data-id');
      myLibrary.splice(parseInt(bookId, 10), 1);
      displayBooks();
    });
  });
};

const addToLibrary = (book) => {
  myLibrary.push(book);
  displayBooks();
};
/* eslint-disable no-use-before-define */

function checked(checkBox) {
  if (checkBox.checked === true) {
    return 'Read';
  }

  return 'Unread';
}

const form = document.querySelector('#new-book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const numOfPages = document.querySelector('#numOfPages');
  const checkBox = document.querySelector('#read-check');

  const book = new Book(title.value, author.value, numOfPages.value, checked(checkBox));
  addToLibrary(book);

  form.reset();
});
