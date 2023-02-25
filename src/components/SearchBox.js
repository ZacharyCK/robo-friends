import React from "react";

/* 
  The searchChange function will be passed in to
  be ran when there is a change to the text content
  inside of the SearchBox input box.
*/
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
      {/* When there is a change to the text box */}
      {/* contents, searchChange will be executed. */}
    </div>
  );
};

export default SearchBox;
