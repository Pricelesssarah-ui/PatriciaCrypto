import styled from "styled-components";




export const StyledBody2 = styled.div`
    background-color: #f7f7f7;
`


export const Body2Page = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;


    @media screen and (max-width: 1200px) {
        display: block;
        padding: 0.5rem;
    }


    @media screen and (max-width: 600px) {
        display: block;
        padding: 0;
    }

   
`


export const Body2Text = styled.div`
   

    h1 {
        color: #036358;
        font-size: 45px;
    }

    P {
        color: #ada7a7;
        margin: 20px 0;
    }

    button {
        background-color: #ffb93f;
        border: none;
        outline: none;
        padding: 10px;
        width: 30%;
        margin: 20px 0;


        &:hover {
            background-color: #036358;
            color: #fff;
        }
    }



    @media screen and (max-width: 600px) {
       margin: 100px 0 20px 20px;
       padding: 20px;

       h1 {
            color: #036358;
            font-size: 25px;
        }

       p {
        font-size: 12px;
        }

        button {
            width: 50%;
        }
    }



    @media screen and (max-width: 1200px) {
       margin: 100px 0 20px 20px;
       padding: 20px;


        button {
            width: 50%;
        }
    }

`

export const Body2Cards = styled.div`
    img {
        width: 100px;
        height: 50px;
        margin: 20px 10px;
        object-fit: contain;
    }


    @media screen and (max-width: 600px) {

        img {
            width: 50px;
            height: 30px;
            margin: 20px 3px;
        }
    }

`

export const Body2Image = styled.div`



@media screen and (max-width: 600px) {
    
    img {
      width: 80%;
      height: 80%;
  
    }

}




@media screen and (max-width: 1200px) {
    
    img {
      width: 80%;
      height: 80%;
  
    }

}

`