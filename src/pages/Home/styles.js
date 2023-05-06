import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px 132px auto;
    grid-template-areas:
    "header"
    "contenttitle"
    "content";
`

export const ContentTitle = styled.div`
    grid-area: contenttitle;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 123px;

    > span {
        font-size: 32px;
    }

    Button {
        width: 207px;
    }
`

export const Content = styled.div`
    grid-area: content;
    margin: 0 123px;
    padding-right: 8px;
    overflow-y: auto;

    :last-child {
        margin-bottom: 50px;
    }
`

