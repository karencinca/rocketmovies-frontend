import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        width: 100%;
        height: 56px;
        padding: 12px;

        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 14px;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    > svg {
        margin-left: 12px;
    }
`