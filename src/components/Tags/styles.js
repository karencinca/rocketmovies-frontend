import styled from 'styled-components'

export const Container = styled.div`
    > h3 {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-size: 20px;
        line-height: 26px;
        font-weight: 400;
        margin: 24px 0;
    }
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    padding: 16px;
    border-radius: 8px;
    display: flex;
    gap: 24px;
`