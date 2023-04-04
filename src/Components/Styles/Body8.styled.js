import styled from "styled-components";



export const StyledBody8 = styled.div`
    height: 100vh;



    h1 {
        text-align: center;
        padding-top: 40px;
        font-size: 45px;
    }


    button {
        background-color: #ffb93f;
        border: none;
        outline: none;
        padding: 10px;
        width: 10%;
        margin: 30px 50px;
        font-weight: bold;
        float: right;

        &:hover {
            color: #fff;
            background-color: #036358;
        }
    }


    @media screen and (max-width: 600px) {
        
    h1 {
        font-size: 25px;
    }

    button {
        width: 30%;
    }
    }
`


export const Body8ImageSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;


    
    @media screen and (max-width: 600px) {
        display: block;
    }
`


export const Body8Image = styled.div`
   margin: 20px 20px 20px 10rem;


    img {
        height: 15rem;
        width: 80%;
    }

    
    @media screen and (max-width: 600px) {
        margin: 20px 5px 20px 30px;


        img {
            height: 10rem;
            width: 90%;
        }
    }



        
    @media screen and (max-width: 1200px) {
        margin: 20px 5px 20px 30px;


        img {
            height: 10rem;
            width: 90%;
        }
    }
`


export const Body8Text = styled.div`
        height: 15rem;
        width: 80%;
        margin-top: -3px;
        box-shadow: 1px 3px 2px #00000040;
        border-radius: 0 0 40px 40px;

        p {
            padding: 20px;
            font-size: 12px;
            font-weight: bold;
            color: #414141;
        }

        h4 {
            padding: 0 20px;
            font-size: 20px;
            color: #036257;
        }


        
    @media screen and (max-width: 600px) {
        width: 90%;
     

        p {
         font-size: 12px;
        }

        h4 {
            font-size: 17px;
        }
    }

        @media screen and (max-width: 1200px) {
        width: 90%;
     

            p {
            font-size: 12px;
            }

            h4 {
                font-size: 17px;
            }
        
        }
        

`