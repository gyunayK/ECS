import React from "react";
import {SearchStyled} from "./Styled.Search";

const Search = () => {
  

  return (
    <div>
      <SearchStyled >
        <input type="text" />
        <button type="submit">Search</button>
      </SearchStyled>
    </div>
  );
};

export default Search;
