import styled from "styled-components";

export const SearchStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  input {
    width: 35rem;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    background-color: #f4a261;
    &:focus {
      background-color: #e76f51;
    }
    color: #fff;
  }
  button {
    width: 5rem;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    background-color: #e76f51;
    cursor: pointer;
    &:hover {
      background: rgb(63, 214, 251);
      background: radial-gradient(
        circle,
        rgba(63, 214, 251, 1) 0%,
        rgba(117, 97, 233, 1) 42%,
        rgba(183, 83, 188, 1) 92%
      );
    }
  }
`;
