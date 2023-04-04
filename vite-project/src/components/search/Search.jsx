import React from "react";
import { useState } from "react";
import {SearchStyled} from "./Styled.Search";

const Search = ({ setSearch }) => {
    const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    clearInput();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div>
      <SearchStyled onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input}/>
        <button type="submit">Search</button>
      </SearchStyled>
    </div>
  );
};

export default Search;
