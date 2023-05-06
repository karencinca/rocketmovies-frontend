import styled from 'styled-components'

export const Container = styled.ul`
  margin: 10px 0;
  display: flex;
  gap: 10px;
  li {
    list-style: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`