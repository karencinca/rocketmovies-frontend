import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 24px;
    width: 100%;
    cursor: pointer;


    .title {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

`