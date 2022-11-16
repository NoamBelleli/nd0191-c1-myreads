import "./App.css";
import { useState, useEffect } from "react";
import { getAll, search, update } from "./BooksAPI";
import ShelvesBody from "./components/ShelvesBody";
import BookItem from "./components/BookItem";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [booksList, setBooksList] = useState([]);
  const [searchForBooks, setSearchForBooks] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
      setBooksList(data);
    });
  }, []);

  const moveToShelf = async (book, newShelf) => {
    const response = await update(book, newShelf);
    setBooksList((books) => {
      const newBooksList = books.map((b) => {
        if (b.id !== book.id) {
          return b;
        } else {
          return {
            ...b,
            shelf: newShelf,
          };
        }
      });
    
      if (!newBooksList.find((currentBook) => currentBook.id === book.id)) {
        console.log("Book does not exist in library");
        newBooksList.push(book);
      }
      console.log("adding new books ", newBooksList);
      return newBooksList;
    });
  };

  const handleSearch = (e) => {
    const userInput = e.target.value;
    console.log(userInput);
    if (userInput) {
      search(userInput).then((searchResult) => {
        if (searchResult instanceof Array) {
          console.log(searchResult);
          setSearchForBooks(
            searchResult.map((searchBook) => {
              const existingBook = booksList.find(
                (book) => searchBook.id === book.id
              );
              if (existingBook) {
                searchBook.shelf = existingBook.shelf;
              }
              return searchBook;
            })
          );
        } else {
          setSearchForBooks([]);
        }
      });
    } else {
      setSearchForBooks([]);
    }
  }; 


  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchForBooks &&
                searchForBooks.map((book) => (
                  <li key={book.id}>
                    <BookItem moveToShelf={moveToShelf} book={book} />
                  </li>
                ))}              
            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            <div className="list-books-content">
              <div>
                <ShelvesBody booksList={booksList} moveToShelf={moveToShelf} />
              </div>
            </div>

            <div className="open-search">
              <a onClick={() => setShowSearchpage(!showSearchPage)}>
                Add a book
              </a>
            </div>
          </div>
        
      )};
    </div>
  );
}

export default App;
