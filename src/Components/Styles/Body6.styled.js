import styled from "styled-components";




export const StyledBody6 = styled.div`
    width: 100vw;
    height: 20rem;


`


export const Body6Text = styled.div`
    display: flex;
    justify-content: center;


    @media screen and (max-width: 600px) {
        display: block;
    }

   
    
`


export const Body6Section = styled.div`
    margin: 200px 50px 90px 50px;
    text-align: center;
    border-right: 2px solid black;
    height: 20rem;
    padding-right: 80px;

    h2 {
        padding: 30px;
        font-size: 20px;
    }


    p {
        font-size: 12px;
        color: #9e9ea1;
        width: 100%;
    }



    @media screen and (max-width: 600px) {
        margin: 100px 20px 20px 20px;
        padding-right: 10px;
        height: 17rem;

        
        h2 {
            padding: 20px;
            font-size: 20px;
        }
    }



    @media screen and (max-width: 1200px) {
        margin: 100px 20px 20px 20px;
        padding-right: 5px;
        height: 17rem;

        
        h2 {
            padding: 20px;
            font-size: 1rem;
        }
    }


`



export const Body6Product = styled.div`
    text-align: center;



    @media screen and (max-width: 1200px) {
        font-size: 10px;
        padding: 10px 0;
    }
`