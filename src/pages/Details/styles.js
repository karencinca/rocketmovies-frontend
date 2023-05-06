import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 116px 80px auto;
    grid-template-areas:
    "header"
    "goback"
    "content";
`

export const GoBack = styled(Link)`
    margin: 0 123px;
`

export const Content = styled.div`
    grid-area: content;
    margin: 0 123px;
    overflow-y: auto;

    .title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 19px;

        h2 {
            font-weight: 500;
            font-size: 36px;
            line-height: 47px;
        }
    }

    .author {
        display: flex;
        margin: 24px 0 20px 0;
        align-items: center;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 5px;
        }

        span {
            font-family: 'Roboto', sans-serif;
            margin-right: 8px;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 16px;
            margin-right: 5px;
        }
    }

    > p {
        font-weight: 400;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: justify;
        margin: 40px 20px 50px 0;
    }

    :last-child {
        margin-bottom: 80px;
    }

    Button {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
            color: ${({ theme }) => theme.COLORS.PINK};
        }

`