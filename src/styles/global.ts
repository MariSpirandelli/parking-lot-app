import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
body,
p,
div {
  font-family: HelveticaNeue, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}

* {
  outline: none;
  margin: 0;
  padding: 0;
}

html {
  height: 100vh;
}

body {
  background-color: var(--content-bg-color) !important;
  height: 100vh;
  margin: 0;
  padding: 0;
  max-height: 100vh;
  float: left;
  width: 100%;
  display: flex;
  flex-flow: column;
}

.content-bg{
    height: calc(100vh - 88px);
}

`;
