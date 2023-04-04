import styled from "styled-components";




export const StyledBody4 = styled.div`
    width: 100vw;
    padding-bottom: 5rem;

    @media screen and (max-width: 600px) {
        margin: 0;
    }


    @media screen and (max-width: 1200px) {
        margin: 50px 0;
    }


`


export const Body4Page = styled.div`
    display: flex;


    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column-reverse;
        padding-top: 0;
    }

    
    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 0;
    }
`


export const Body4Image = styled.div`

    @media screen and (max-width: 600px) {
        img {
            width: 100%;
            height: 50%;
        }
    }
       
`


export const Body4Text = styled.div`

    h1 {
        font-size: 50px;
        padding-top: 70px;
        color: #0e695f;
    } 

    span {
        color: #000;
    }

    p {
        color: #cecece;
        padding: 50px 0;
    }



    @media screen and (max-width: 600px) {
      

        h1 {
            font-size: 25px;
            padding-top: 50px;
            margin: 10px;
        } 

        p {
            margin: 10px;
        }

    }
`


export const Body4Trade = styled.div`
    display: flex;
    align-items: center;


    @media screen and (max-width: 600px) {
        display: block;
    }

`


export const Body4List = styled.div`
   margin: 15px;
`


export const Body4Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 3px 2px #cecece;
    

    @media screen and (max-width: 600px) {
        h4 {
            font-size: 12px;
        }
    }
`