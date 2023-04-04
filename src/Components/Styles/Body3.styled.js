import styled from "styled-components";



export const StyledBody3 = styled.div`
    width: 100vw;
    height: 143vh;
    background-color: #036358;


        @media screen and (max-width: 600px) {
            height: 110vh;
        }

        @media screen and (max-width: 1200px) {
            height: 110vh;
        }
`

export const Body3Page = styled.div`
    display: flex;
    justify-content: space-between;


    @media screen and (max-width: 600px) {
        display: block;
    }


    @media screen and (max-width: 1200px) {
        display: block;
    }
`


export const Body3Text = styled.div`
    color: #fff;
    margin: 25rem 5rem;
    

    h2 {
        font-size: 45px;
        margin: 50px 0;
    }

    p {
        width: 80%;
    }


    @media screen and (max-width: 600px) {
        margin: 2rem 3rem; 


        h2 {
            font-size: 25px;
            margin: 0;
            padding-top: 30px;
        }

        p {
            margin-top: 20px;
            font-size: 12px;
            width: 100%;
        }
    }


        @media screen and (max-width: 1200px) {
        margin: 2rem 3rem; 


        h2 {
            font-size: 25px;
            margin: 0;
            padding-top: 30px;
        }

        p {
            margin-top: 20px;
            font-size: 12px;
            width: 100%;
        }
    }

`



export const Body3Image = styled.div`
    margin: 0;


    @media screen and (max-width: 600px) {
        img {
            height: 100%;
            width: 100%;
        }
    }

    @media screen and (max-width: 1200px) {
        img {
            height: 100%;
            width: 100%;
        }
    }
`