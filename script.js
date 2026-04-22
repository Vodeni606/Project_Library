let myLibrary = [];

const bookTitle = document.getElementById('Title');
const author = document.getElementById('Author');
const pages = document.getElementById('Pages');
const read = document.getElementById('Read');
const newBook = document.querySelector('.newBook');
const libraryContainer = document.querySelector('.library-container');

function Book(name,author,pages,read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID()
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
} 

function addBookToLibrary(name,author,pages,read) {
    const addedBook = new Book(name,author,pages,read);
    myLibrary.push(addedBook);
}

newBook.addEventListener('click',function(){
  const title = bookTitle.value;
  const auth = author.value;
  const pageNum = pages.value;
  const readYN = read.checked;

  addBookToLibrary(title,auth,pageNum,readYN);
  displayBooks();

})  

function displayBooks (){
  libraryContainer.innerHTML = "";
  for(let i = 0; i < myLibrary.length;i++){
    const bookInfo = myLibrary[i];

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookRemove = document.createElement('button');
    bookRemove.textContent = "Remove";

    const bookName = document.createElement('h3');
    bookName.textContent = bookInfo.name;

    const bookAuth = document.createElement('p');
    bookAuth.textContent = bookInfo.author;

    const bookPages = document.createElement('p');
    bookPages.textContent = bookInfo.pages;

    const bookRead = document.createElement('p');
    bookRead.textContent = bookInfo.read ? "Have read " : "Didnt read";
    
    const bookRtoggle = document.createElement('button')
    bookRtoggle.textContent = "Have read";

    bookRtoggle.addEventListener('click',function(){
      bookInfo.toggleRead();
      displayBooks();
    })

    bookRemove.addEventListener('click',function(){
      const bookID = bookCard.dataset.id;

      myLibrary = myLibrary.filter(book => bookID !== book.id);
      displayBooks();

    })
    bookCard.appendChild(bookRtoggle);
    bookCard.appendChild(bookRemove);
    bookCard.appendChild(bookName);
    bookCard.appendChild(bookAuth);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);

    bookCard.dataset.id = bookInfo.id;
    libraryContainer.appendChild(bookCard);

  }

  
}

