import styled from 'styled-components'

export const Container = styled.div`
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding: 5px 16px;
    margin-right: 8px;
    border-radius: 8px;
    display: inline-block;
    margin-top: 25px;
    cursor: pointer;
    `