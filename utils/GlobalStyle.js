import { createGlobalStyle } from 'styled-components';
import colors from 'utils/colors';

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
word-wrap: break-word;
}
body {
  font-family: Arial, Helvetica, Verdana, sans-serif;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: .03rem;
  margin: 0 auto;
}
h1,h2,h3,p {
  margin:0;
}
a {
  color: #bf9e5f;
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
img {
  border: 0px;
  width: 100%;
}
`;

export default GlobalStyle;