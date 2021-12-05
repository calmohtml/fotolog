import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --titles: 'Outfit', sans-serif;
    --text: 'Cabin', sans-serif;
    --dark1:#2e3440;
    --dark2:#3b4252;
    --dark3: #434c5e;
    --dark4:#4c566a;
    --white: #e9e9e9;
  }

  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--text);
    color: var(--dark1)
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--titles);
  }

  #__next {
    margin: 0 auto;
    min-height: 100vh;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}
