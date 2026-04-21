function book(name,author,pages,read){
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookInfo = function (){
    return (this.name,"by",this.author,this.pages,"pages",", Have read",this.read)
  }
}

const hobbit = new book ("The Hobbit","Tolkin","299","No");

hobbit.bookInfo();  