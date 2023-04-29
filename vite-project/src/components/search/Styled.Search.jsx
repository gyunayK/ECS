import styled from "styled-components";

export const SearchStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  input {
    width: 35rem;
    height: 3rem;
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 700;

    outline: none;
    color: black;
    background-color: #C7BCA1;
    &:focus {
      background-color: #eae8ff;
    }
    
  }
  button {
    width: 5rem;
    height: 3rem;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    padding: 0.5rem;
    font-size: 1.25rem;
    font-weight: 500;
    outline: none;
    background-color: #C7BCA1;
    cursor: pointer;
    &:hover {
      background-color: #eae8ff;

  }
  } 
  
`;
