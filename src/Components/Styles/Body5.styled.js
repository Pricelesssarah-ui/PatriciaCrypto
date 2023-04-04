import styled from "styled-components";



export const StyledBody5 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`




export const Body5Text = styled.div`


    p {
        margin: 30px 0;
        color: #85868a;
    }


    @media screen and (max-width: 600px) {
        margin-top: 5rem;
    }

    p {
        margin: 30px 0;
        font-size: 10px;
        padding: 10px;
    }
`


export const Body5Trade = styled.div`
    margin-top: 30px;
`



export const Body5Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    padding: 20px;
    margin: 20px 0;
    width: 100%;
    box-shadow: 0 3px 2px #cecece;
    

    @media screen and (max-width: 600px) {
        width: 90%;
        margin: 30px 20px;
    }

    @media screen and (max-width: 1200px) {
        width: 90%;
        margin: 30px 20px;
    }
`


export const Body5Image = styled.div`

    @media screen and (max-width: 600px) {
        display: none;
    }


    @media screen and (max-width: 1200px) {
        display: none;
    }

`