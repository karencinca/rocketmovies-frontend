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
    grid-area: goback;
    margin: 40px 123px;
    display: flex;
    align-items: center;
`

export const Content = styled.div`
    grid-area: content;
    margin: 0 106px 85px 123px;
    padding-right: 12px;
    overflow-y: auto;

    > h2 {
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
    }

    > .name-grade {
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: space-between;
        margin: 40px 0;

        Input {
            font-size: 16px;
        }
    }

    > textarea {
        width: 100%;
        padding: 12px;

        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-bottom: 8px;
        border-radius: 10px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 16px;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    .buttons {
        display: flex;
        gap: 40px;
        margin: 40px 0;
    }

    :last-child {
        margin-bottom: 50px;
    }

`
