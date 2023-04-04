import styled, {createGlobalStyle} from "styled-components";



export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif; 
    }
`


export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;


    @media screen and (max-width: 1200px) {
        padding-right: 20px;
        padding-left: 20px;
        
    }
`


export const Button = styled.button`
    border-radius: 4px;
    white-space: wrap;
    background: ${({primary}) => (primary ? "#fff" : "#ffb93f")};
    padding: ${({big}) => big ? "12px 64px" : "6px 20px"};
    color: #000;
    font-size: ${({fontBig}) => fontBig ? "15px" : "10px"};
    outline: none;
    border: none;
    cursor: pointer;
    


    &:hover {
        transition: all 0.3s ease-out;
        color: #fff;
        background: ${({primary}) => (primary ? "#000" : "#036358")};
    }




    @media screen and (max-width: 960px) {
        width: 50%;
        margin: 20px 0;
    }
`



export default GlobalStyle