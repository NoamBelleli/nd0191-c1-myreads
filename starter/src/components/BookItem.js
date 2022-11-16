import React from "react";

const BookItem = ({ book, moveToShelf }) => {

  const { title, authors, imageLinks } = book;
  const handleChangeShelf = (e) => {
    const newShelf = e.target.value;    
    moveToShelf(book, newShelf)
  }
  


  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: imageLinks ? `url(${imageLinks.thumbnail})`:"",              
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={handleChangeShelf} value={book.shelf || "none"}>
            <option disabled> Move to... </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default BookItem;
