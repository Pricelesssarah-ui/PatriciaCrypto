import styled from "styled-components";

export const StyledBody1 = styled.div`
    background: url("../../../assets/page2Pic1.png");
    background-size: cover;
    width: 100%;
    height: 100vh;


    @media screen and (max-width: 1200px) {
           height: 80vh;
    }

    @media screen and (max-width: 600px) {
           height: 100vh;
    }
`


export const Title = styled.div`
    margin: 15rem 10rem;


    h1 {
        font-size: 40px;
        margin-bottom: 40px;
    }



        @media screen and (max-width: 600px) {
            margin: 0 1rem;
            padding: 10px;
           

            h1 {
                font-size: 20px;
                margin-top: 0;
                padding-top: 0; 
                margin-bottom: 10px;
                text-align: center;
            }

            p {
                font-size: 10px;
                text-align: center;
            }
        }


        @media screen and (max-width: 1200px) {
            margin: 6rem 1rem;
           

            h1 {
                font-size: 30px;
                margin-top: 80px;
                margin-bottom: 20px;
                text-align: center;
            }

            p {
                text-align: center;
            }
        }
      

`


export const Image = styled.div`
    margin-top: -40px;


    
    img {
        margin-top: -10rem;
        margin-left: 10rem;
        width: 35%;
    }



    @media screen and (max-width: 1200px) {
        margin-top: 100px;



        img {
            margin: 0 2.5rem;
            width: 90%;
        }
    }


    @media screen and (max-width: 600px) {
        margin-top: -80px;


        img {
            margin: 0 20px;
            width: 90%;
            padding-top: -10rem;

        }

    }



    div {
        display: flex;
        flex-direction: column;
        height: 15rem;
        width: 35%;
        margin-left: 10rem;
        margin-top: -100px;
        background: #494041;
        border-radius: 40px;
        box-shadow: 0 20px #6f6566;


        h2 {
            margin-top: 120px;
            margin-left: 15px;
            color: white;
            font-size: 25px;
        }

        @media screen and (max-width: 1200px) {
            margin: 0 2.5rem;
            margin-top: -100px;
            width: 90%;
        }

        @media screen and (max-width: 600px) {
            margin-left: 20px;
            margin-right: 20px;
            width: 90%;
            height: 13rem;
            


            h2 {
                font-size: 20px;
            }
        }




        hr {
            width: 70px;
            height: 3px;
            background-color: #fff;
            margin-left: 22rem;
            margin-top: -40px;


            @media screen and (max-width: 1200px) {
                margin-left: 35rem;
            }

            @media screen and (max-width: 600px) {
                margin-left: 17rem;
                margin-top: -40px;
                width: 30px;
            }
        }
    }
`