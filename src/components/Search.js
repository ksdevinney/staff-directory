import React from "react";

function Search(props) {
  return (
      <span className="form-floating input-group-lg mb-3 search-bar">
        <input
          onChange={(event) => props.handleSearch(event)}
          placeholder="Search"
          value={props.searchString}
        />
      </span>
  );
}

export default Search;
