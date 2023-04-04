import styled from "styled-components";




export const StyledBody10 = styled.div`
    height: 100vh;
`


export const Body10Container = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding: 100px;



    @media screen and (max-width: 600px) {
        display: block;
        padding: 80px 20px;
    }


    @media screen and (max-width: 1200px) {
        display: block;
        padding: 80px 20px;
    }
`


export const Body10Section1 = styled.div`
    margin: 5rem 5rem;

    h2 {
        width: 100%;
        margin-bottom: 6rem;
    }


    button {
        background-color: #ffb93f;
        border: none;
        outline: none;
        padding: 10px;
        width: 100%;
        margin: 20px 0;


        &:hover {
            background-color: #036358;
            color: #fff;
        }
    }


    @media screen and (max-width: 600px) {
        margin: 5px;


        img {
            padding: 0 100px;
        }
        
        h2 {
        margin-bottom: 1rem;
        width: 20rem;
    }

    }



    @media screen and (max-width: 1200px) {
        margin: 5px;


        img {
            padding: 0 100px;
        }
        h2 {
        margin-bottom: 1rem;
        width: 20rem;
    }

    }
`


export const Body10Section2 = styled.div`



        img {
            height: 50rem;
            width: 20rem;
            margin-left: 10rem;
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



export const Body10Section3 = styled.div`
        margin: 5rem 5rem;
        width: 100%;
       

            button{
                color: #006156;
                background: #cdfcf4;
                border: none;
                outline: none;
                font-weight: bold;
                padding: 10px;
                border-radius: 10px;
                margin: 20px 0;
                }

                h1 {
                   font-size: 25px;
                }
                    p {
                        line-height: 3.5;
                        font-size: 12px;
                        width: 100%;
                        margin: 3rem 0;
                    }

                    hr {
                        width: 100%;
                        margin: 20px 0;
                    }


                    @media screen and (max-width: 600px) {
                        display: flex;
                        flex-direction: column-reverse;
                        margin: 5px 0;
                        width: 100%;

                        
                    h1 {
                        font-size: 15px;
                    }
                    p {
                        margin: 2rem 0;
                        width: 20rem;
                    }

                  

                    }


                    @media screen and (max-width: 1200px) {
                        display: flex;
                        flex-direction: column-reverse;
                        margin: 5px 0;
                        width: 100%;

                        
                    h1 {
                        font-size: 15px;
                    }
                    p {
                        margin: 2rem 0;
                        width: 20rem;
                    }

                  

                    }




`