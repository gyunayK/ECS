import styled from 'styled-components';

export const CardStyled = styled.div`
    width: 18rem;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1.5rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    &:hover {
        box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.2);
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
    .btn {
        font-size: 1rem;
        font-weight: 700;
        padding: 0.75rem 1.5rem;
        border-radius: 2rem;
    }
    .btn:hover {
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    }
`;