function Book(title, author, numOfPages, status) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.status = status;

  this.info = () => `${this.title} by ${this.author}, ${numOfPages} pages, ${this.status}`;
}

const book = new Book('The New Man', 'Femi Ademilure', '347', 'not yet read');