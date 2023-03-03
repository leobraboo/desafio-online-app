import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
body, html {
  height: 100vh;
  width: 100vw;
  background: rgb(78,64,137);
  background: linear-gradient(0deg, rgba(78,64,137,1) 25%, rgba(255,255,255,1) 25%);
  padding: 0;
  font-family: inter;
  margin: 0;
  
  ::-webkit-scrollbar {
    width: 6px;
  }`