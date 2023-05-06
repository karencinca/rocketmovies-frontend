import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    > h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        margin: 48px 0;
    }

    Button {
        margin-top: 16px;
    }

    > a {
        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`