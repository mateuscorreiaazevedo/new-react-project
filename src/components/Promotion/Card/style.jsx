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
`

export const CardImg = styled.img `
    width: 100px;
    margin-right: 1.2em;
`

export const CardInfo = styled.div `
    
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