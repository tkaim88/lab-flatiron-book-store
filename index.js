const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// step 1: update the title on the page
console.log("starting the bookstore code");

let header = document.getElementById("header");
if (header) {
    header.textContent = bookStore.name;
    console.log("updated header to:", bookStore.name);
}

// step 2: delete the example book template
let exampleBook = document.getElementById("delete-this");
if (exampleBook) {
    exampleBook.remove();
    console.log("deleted the example book");
}

// step 3: get the book list container
let bookList = document.getElementById("book-list");

// step 4: loop through each book and add to page
for (let i = 0; i < bookStore.books.length; i++) {
    let book = bookStore.books[i];
    
    // create a new list item
    let li = document.createElement("li");
    
    // add the book title
    let titleEl = document.createElement("h3");
    titleEl.textContent = book.title;
    
    // add the author
    let authorEl = document.createElement("p");
    authorEl.textContent = "by " + book.author;
    
    // add the image from the object
    let imgEl = document.createElement("img");
    imgEl.src = book.imageUrl;
    imgEl.alt = book.title;
    imgEl.style.width = "120px";
    imgEl.style.height = "auto";
    
    // put everything into the li
    li.appendChild(titleEl);
    li.appendChild(authorEl);
    li.appendChild(imgEl);
    
    // add some basic styling so it looks nice
    li.style.border = "1px solid #ddd";
    li.style.padding = "15px";
    li.style.marginBottom = "15px";
    li.style.borderRadius = "8px";
    li.style.listStyle = "none";
    
    // add to the page
    bookList.appendChild(li);
    
    console.log("added book:", book.title);
}

console.log("done! added", bookStore.books.length, "books");

