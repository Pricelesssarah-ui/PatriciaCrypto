import styled from "styled-components";


export const StyledBody7 = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-around;
    background: #1c1e2b;
    height: 100vh;
    padding: 150px;
    margin-top: 30rem;


    @media screen and (max-width: 600px) {
        display: block;
        padding: 10px;
        margin-top: 50rem;
    }

    @media screen and (max-width: 1200px) {
        display: block;
        padding: 10px;
    }
`



export const Body7Text = styled.div`
    margin: 100px 0;
    color: #fff;

    h1 {
        font-size: 45px;
    }


    p {
        width: 60%;
        margin: 30px 0;
    }
    button {
        background-color: #ffb93f;
        border: none;
        outline: none;
        padding: 10px;
        width: 30%;
        margin: 20px 0;
        font-weight: bold;


        &:hover {
            background-color: #036358;
            color: #fff;
        }
    }


    @media screen and (max-width: 600px) {
        margin: 10px;

        h1 {
            padding-top: 20px;
            font-size: 25px;
        }


        p {
            width: 80%;
            margin: 20px 0;
        }

        button {
            width: 50%;
        }
    }





    
`


export const Body7Image1 = styled.div`

        img {
            margin-top: 200px;
            height: 20%;
            
        }
       

        @media screen and (max-width: 600px) {
            img {
                display: none;
            
        }

        }


        
        @media screen and (max-width: 1200px) {
            img {
                display: none;
            
        }

        }
    
`



export const Body7Image = styled.div`

    @media screen and (max-width: 600px) {

        img {
            margin-top: 20px;
            width: 100%;
        }
       
    }
`
