import styled from "styled-components";

export const Reset = styled.body`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  padding-top: 4rem;
  color: #333;
  --type-first: Helvetica, Arial, sans-serif;
  --type-second: "Spectral", Georgia;
  font-family: var(--type-first);

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  button,
  input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }
`;

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;
