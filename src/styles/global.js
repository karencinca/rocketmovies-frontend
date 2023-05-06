import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    body, input, button, textarea, span {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a {
        text-decoration: none;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    *::-webkit-scrollbar {
        width: 8px;
        margin-right: 10px;
    }

    *::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 20px;
    }
`
