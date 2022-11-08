import React from "react";
import Shelf from "./Shelf";

const ShelvesBody = ({books}) => {

    const currentlyReading = [];
    const wantToRead = [];
    const read = [];

    return (
      <div>
            <shelf title="Currently Reading" books={ currentlyReading } />
        <shelf title="Want to Read" books={ wantToRead }/>
        <shelf title="Read" books={ read}/>
      </div>
    );

}

export default ShelvesBody;