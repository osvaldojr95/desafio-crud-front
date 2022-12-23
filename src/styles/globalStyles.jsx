import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    :root {
        --white: rgb(255,255,255);
        --black: rgb(0,0,0);
        --purple: #A101C5;
        --green: #03AC00;
        --grey: #D4D4D4;
        --greyDark: #818181;
        --red: #C70000;
        --neon: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #c300ff,
        0 0 30px #c300ff, 0 0 40px #c300ff, 0 0 55px #c300ff, 0 0 75px #c300ff,
        2px 2px 2px rgba(202, 81, 206, 0);
    }

    .root {
        height: 100vh;
        width: 100%;
    }

    body {
        height: 100vh;
        width: 100%;
    }
`;

export default GlobalStyle;
