import styled from 'styled-components'

export const Container = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 40px 0;
    grid-area: goback;
`