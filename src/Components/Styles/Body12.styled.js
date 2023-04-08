import styled from "styled-components";



export const StyledBody12 = styled.div`
  
    h1 {
        font-size: 50px;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
      

        h1 {
            font-size: 30px;
            margin-top: 0;
        }
    }
`


export const Body12Container = styled.div`
    display: flex;
    align-items: center;
    margin: 5rem 10rem 5rem 10rem;



    @media screen and (max-width: 1200px) {
        margin: 5rem 1rem;
    }

    @media screen and (max-width: 600px) {
        display: block;
        margin: 1rem 1rem 5rem 1rem;
        width: 90%;
    }
    
`



export const Body12Box = styled.div`
    box-shadow: 1px 3px 3px  #00000040;
    border-radius: 70px;
    margin: 10px 20px;
    padding: 50px;


    h5 {
        padding: 10px 0;
        color: #006156;
    }

    p {
        margin-top: 20px;
        font-size: 12px;
        padding: 10px 0;
        line-height: 1.3;
        color: #050503;
    }

  

    @media screen and (max-width: 1200px) {
        margin: 5px 10px;
        padding: 20px;
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        margin: 15px 20px;
        padding: 20px;
        width: 90%;
    }

`