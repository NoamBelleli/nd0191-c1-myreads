import React from "react";
import Shelf from "./Shelf";

const ShelvesBody = ({booksList, moveToShelf}) => {

    const currentlyReading = booksList.filter((book)=> book.shelf === "currentlyReading");
    const wantToRead = booksList.filter((book)=> book.shelf === "wantToRead");
    const read = booksList.filter((book)=> book.shelf === "read");

    return (
      <div>
        <Shelf title="Currently Reading" moveToShelf={moveToShelf} booksList={ currentlyReading } />
        <Shelf title="Want to Read" moveToShelf={moveToShelf} booksList={ wantToRead }/>
        <Shelf title="Read" moveToShelf={moveToShelf} booksList={ read}/>
      </div>
    );

}

export default ShelvesBody;