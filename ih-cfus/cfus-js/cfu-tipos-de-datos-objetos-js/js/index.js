const user = {
  name: "Facundo",
  id: 13,
};

const book = {
  title: "The Catcher in the Rye",
  author: "J.D Salinger",
  isbn: "0316769487",
  category: "Classic Literature",
};


const book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "0446310786",
    category: "Classic Literature",
  };


const book3 = {
    title: "El eternauta",
    author: "Oesterheld, H.G.; López, Solano",
    isbn: "8491749268",
    category: "Comic",
};

user.books = {book, book2, book3}



const library = []
library.push(user);


console.table(library);
for (let index = 0; index < library.length; index++) {
    const libraryList = library[index];
    console.log(libraryList)
    
}