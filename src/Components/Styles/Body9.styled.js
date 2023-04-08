import styled from "styled-components";



export const StyledBody9 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 60px;


    @media screen and (max-width: 600px) {
        height: 50vh;
        display: block;
        margin-top: 30rem;
        margin-bottom: 10rem;
    }
`

export const Body9Section1 = styled.div`
    margin-left: 10rem;

    p {
        padding-bottom: 40px;
        line-height: 1.5;
        width: 25rem;
        font-size: 12px;
    }

    h1 {
        margin-bottom: 40px;
        color: #006055;
    }


    @media screen and (max-width: 1200px) {
        margin-left: 1rem;


        p {
        padding-bottom: 20px;
        line-height: 1;
        width: 20rem;
        }

        img {
            width: 90%;
            height: 15rem;
            margin: 10px;
        }
    }

    

    @media screen and (max-width: 600px) {
        margin-left: 1rem;


        p {
            padding-bottom: 20px;
            line-height: 1;
            width: 20rem;
        }


        h1 {
            margin-bottom: 20px;
        }
        img {
            width: 90%;
            height: 20rem;
            margin: 10px;
            object-fit: cover;
        }
    }

`


export const Body9Section2 = styled.div`

    img {
        height: 45rem;
        margin-left: 10rem;
    }

    @media screen and (max-width: 600px) {
       img {
        display: none;
       
       }
    }


    @media screen and (max-width: 1200px) {
        img {
            height: 45rem;
            width: 90%;
            margin-left: 1rem;
        }
    }
`