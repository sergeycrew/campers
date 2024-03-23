import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import InterRegular from "./fonts/Inter-Regular.ttf";
import InterMedium from "./fonts/Inter-Medium.ttf";
import InterSemiBold from "./fonts/Inter-SemiBold.ttf";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Inter';
        src: local('InterRegular'),
        url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: local('InterMedium'),
        url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: local('InterSemiBold'),
        url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    

body {
  margin: 0; 
  padding: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Inter', sans-serif;
}

a {
    text-decoration: none;
  }

p {
    padding: 0;
    margin: 0;
}


ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h2{
  font-family: 'InterSemiBold';
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input, textarea, select, button {
  font: inherit;
}

button {
    cursor: pointer;
    border: none;

  }
`;
