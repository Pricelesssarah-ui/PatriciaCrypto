import styled from "styled-components";



export const StyledBody11 = styled.div`
    display: flex;
    align-items: center;
    margin: 20rem 5rem 5rem 5rem;
    width: 100%;

    h1 {
        font-size: 50px;
        color: #006055;
    }


   


    @media screen and (max-width: 1200px) {
        display: flex;
        margin: 0 1rem 5rem 1rem;


        h1 {
            font-size: 25px;
        }
    }


    @media screen and (max-width: 600px) {
        display: block;
        margin: 15rem 1rem 2rem 1rem;


        h1 {
            font-size: 25px;
        }
    }
`



export const Body11Image = styled.div`
    margin: 20px;

    img {
        height: 60rem;
        width: 40rem;
        object-fit: cover;
    }
    

    @media screen and (max-width: 1200px) {
        margin: 10px;

        img {
            height: 30rem;
            width: 20rem;
        }
    }

    @media screen and (max-width: 600px) {
        margin: 10px;

        img {
            height: 30rem;
            width: 20rem;
        }
    }

`


export const Body11Text = styled.div`
   

    h1 {
        padding: 20px;
    }

    p {
        padding: 20px;
        color: #9e9ea1;
    }

    h5 {
        padding: 20px;
    }



    @media screen and (max-width: 600px) {
        p {
            padding: 10px;
        }

        h5 {
        padding: 10px;
    }
    }


    
    @media screen and (max-width: 1200px) {
        p {
            padding: 10px;
        }

        h5 {
        padding: 10px;
    }
    }
`



export const Flag = styled.div`
    padding: 20px;
`


export const BelowName = styled.div`

    display: flex;
    align-items: center;
    padding: 20px;


    img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin: 10px;
    }

    p {
        color: #006055;
        font-weight: bold;
    }
`