import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 16px;
    }

    html, body {
        max-width: 100vw;
        height: 100vh;

        overflow-x: hidden;
        
        background-color: var(--background);

        @media (max-width: 768px) {
            font-size: 13px;
        }

        @media (max-width: 425px) {
            font-size: 10px;
        }
    }

    *, input, button {
        border: 0;
        outline: 0;
        font-family: 'Manrope', sans-serif;
    }

    :root {
        --background: #000;
        --text-color: #FFF;
        --button: #8257E5;
        --border: #29292E;
        --border-menu-mobile: #A8A8B3;
        --text-color-menu-mobile: #E1E1E6;
      }
`