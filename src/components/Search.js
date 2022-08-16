import React from "react";

function Search( {searchText, handleSearch}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchText} onChange={(e)=>handleSearch(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
