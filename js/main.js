// const title = document.querySelector('h1');
// title.addEventListener('click', () => {
//   this.textContent = 'Hello Nigeria';
// });

const myLibrary = [
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    numOfPages: 174,
  },

  {
    title: 'Da Vinci Code',
    author: 'Dan Brown',
    numOfPages: 268,
  },
  {
    title: 'Aztec Blood',
    author: 'Gary Jennings',
    numOfPages: 345,
  },
];

const getTemplate = (book) => `<div class="col-6 col-md-4 col-lg-3 card p-2 text-center">
    <img class="img-fluid mb-1" src="https://res.cloudinary.com/mobello/image/upload/v1622672250/soccerinfo/rails_uploads/ebfc507cc734189df779052bba7e57d6.jpg" alt="">

    <h4 class="text-success m-0">${book.title}</h4>
    <p class="m-0 fw-bolder">${book.author}</p>
    <small class="text-muted">${book.numOfPages} pages</small>
    </div>`;

const displayBooks = () => {
  let bookList = '';

  myLibrary.forEach((book) => {
    bookList += getTemplate(book);
  });

  document.querySelector('.book-list')
    .innerHTML = bookList;
};

displayBooks();

const form = document.querySelector('#new-book-form')
form.addEventListener("submit", (e) => {
    e.preventDefault

    alert("FORM SUBMITTED")
})