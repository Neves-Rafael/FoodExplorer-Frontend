import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
    }

    body {
        //background: theme
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    input {
        border: none;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;
