import React from "react";
import BookItem from "./BookItem";


const Shelf = ({books, title, moveToShelf}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            <li key={book.id}>
              <BookItem moveToShelf={moveToShelf} book={book} />
            </li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;