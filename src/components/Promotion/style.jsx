import styled from "styled-components"
// --------------------------------------------------------------------------------------------

export const Cardbox = styled.div `
    border-radius: .5em;
    border: .0625em solid #c3c3c3;
    box-shadow: 0 2px 7px 0 rgba(0,0,0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 1rem;
`

export const CardImg = styled.img `
    width: 100px;
    margin-right: 1.2em;
`

export const CardInfo = styled.div `
    margin-left: 1em;
`

export const CardTitle = styled.h1 `
    font-size: 1em;
    color: #2c3e50;
`

export const CardPrice = styled.span `
    font-size: 26px;
    font-weight: bold;
    color: #3498d8;
`

export const CardComments = styled.section `
    display: flex;
    align-items: center;
    div:nth-child(1) {
        font-size: 16px;
        font-weight: bold;
        color: #95a5a6;
    }
    div:nth-child(2) {
        margin-left: auto;
        margin-right: 1.2em;
        color: #3498d8;
    }
    
`

export const CardLink = styled.a `
    border: 1px solid #3498d8;
    color: #3498d8;
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 8px 10px;
`

export const ListContainer = styled.div `
    max-width: 800px;
`

export const ListHeader = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    h1 {
        color: #888;
        font-size: 1.5em;
        padding-left: 1em;
    }
    a {
        text-decoration: none;
        font-weight: bold;
        color: #3498d8;
        font-size: 1em;

    }

`
export const SearchInput = styled.input `
    display: flex;
    height: 3em;
    border: .0625em solid #ccc;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 1.2em;
    padding: 0 2em;
    font-size: 1em;

    &:focus {
        outline: .15em solid #3498d8;
    }
`