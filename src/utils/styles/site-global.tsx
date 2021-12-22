import { createGlobalStyle } from "styled-components"


const SiteGlobal = createGlobalStyle`
  :root {
    --gray: gray;
    --blue: blue;
    --green: green;
    --jet: #303030;
    --black: #000000;
    --beige: #F2F2DE;
    --violet: #8b6ccc;
    --primary: #8b6fc9;
    --crimson: crimson;
    --dimgray: #696969;
    --white: whitesmoke;
    --darkgray: #1a1a1a;
    --licorice: #141412;
    --lightgray: #F9F9F9;
    --mildwhite: #E8E8E8;
    --truewhite: #FFFFFF;
    --eerieblack: #1E1E1E;
    --blackolive: #3B3B3B;
    --raisinblack: #202020;
    --antiflashwhite: #F2F2F2;
    --transparent: transparent;
    --darkslategray: darkslategray;
  }

  html, body {
    margin: 0;
    color: black;
    font-size: 16px;
    font-family: Moderat;
  }
`


export default SiteGlobal