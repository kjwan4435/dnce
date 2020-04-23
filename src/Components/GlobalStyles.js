import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: rgba(30,30,30,1);
        color: white;
        padding-top: 70px;
    }
    select{
        width: 300px;
  padding: 10px 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  border-style: none;
  color: black;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 20px;

    }
`;

export default globalStyles;
