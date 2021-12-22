import { createGlobalStyle } from "styled-components"

const Fonts = createGlobalStyle`
  @font-face {
    font-family: Moderat;
    src: url("/fonts/Moderat Regular.otf") format("opentype");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: Moderat;
    src: url("/fonts/Moderat Light.otf") format("opentype");
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: Moderat;
    src: url("/fonts/Moderat Bold.otf") format("opentype");
    font-style: normal;
    font-weight: bold;
  }
`


export default Fonts