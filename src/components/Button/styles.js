import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: none;
    border-radius: 8px;
`