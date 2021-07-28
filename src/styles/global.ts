import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  img {
    display: block;
    max-width: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #333;
    background-image: linear-gradient(to top left, #753682 0%, #bf2e34 100%);
  }

  .active {
    background: rgba(255, 255, 255, 0.4);

    h2 {
      font-weight: 700 !important;
    }
  }
`;
