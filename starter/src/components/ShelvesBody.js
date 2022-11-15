import React from "react";
import Shelf from "./Shelf";

const ShelvesBody = ({books}) => {

    const currentlyReading = books.filter((book)=> book.shelf === "currentlyReading");
    const wantToRead = books.filter((book)=> book.shelf === "wantToRead");
    const read = books.filter((book)=> book.shelf === "read");

    return (
      <div>
            <Shelf title="Currently Reading" books={ currentlyReading } />
        <Shelf title="Want to Read" books={ wantToRead }/>
        <Shelf title="Read" books={ read}/>
      </div>
    );

}

export default ShelvesBody;