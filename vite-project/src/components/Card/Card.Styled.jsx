import styled from "styled-components";

export const CardStyled = styled.div`
  width: 20rem;
  background-color: #fafafa;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0.8rem;
  color: #000000;
  position: relative;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  border: 2px solid transparent;
  &:hover {
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.2);
    border: 2px solid #000000;
  }
  &:hover .btn {
    visibility: visible;
    opacity: 1;
  }

  .btn {
    /* visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s; */

    font-size: 1rem;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    border: 2px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
  }
  .btn:hover {
    background-color: #ffffff;
    color: #000000;
    border: 2px solid #1d3557;
  }
  .price {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
  }
  .card-img-top {
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px);
  }
  .card-body {
    text-align: center;
  }
  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
  }
  .card-text {
    font-size: 1rem;
    padding-top: 1rem;
    font-weight: 400;
  }
`;

export const LoadingGIF = styled.img`
  max-width: 1000px;
  height: auto;
  margin: 0 auto;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
`;
