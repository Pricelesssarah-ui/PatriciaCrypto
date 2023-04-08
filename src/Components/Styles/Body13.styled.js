import styled from "styled-components";



export const StyledBody13 = styled.div`

`

export const Body13Image = styled.div`
    img {
            margin: 0 45rem;
        }

        @media screen and (max-width: 1200px) {
           display: flex;
           justify-content: center;
        }


        @media screen and (max-width: 600px) {
            img {
            margin: 0 8rem;
            }
        }
`


export const Body13Container = styled.div`
    background-color: #FFEEA782;
    height: 25rem;
    margin: 50px 200px;
    border-radius: 50px;
    width: 70rem;
    text-align: center;
    padding: 1px;
    

    @media screen and (max-width: 1200px) {
        width: 90%;
        margin: 2rem 2.5rem;
        text-align: center;
    }

    
    @media screen and (max-width: 600px) {
        width: 90%;
        margin: 20px;
    }

`




export const Body13Text = styled.div`
    

    h1 {
        font-size: 50px;
        margin-top: 50px;
    }

    p {
        width: 50rem;
        padding-left: 20rem;
        padding-top: 40px;
        padding-bottom: 30px;
        color: #A19898B8;
    }


    
    @media screen and (max-width: 1200px) {
      
      h1 {
          font-size: 30px;
          margin-top: 30px;
      }

      p {
          padding-left: 10px;
          width: 30rem;
          font-size: 12px;
          margin: 0 auto;
      }
  }


    @media screen and (max-width: 600px) {
      
        h1 {
            font-size: 25px;
            margin-top: 20px;
        }

        p {
            padding-left: 10px;
            width: 20rem;
            font-size: 12px;
        }
    }


`



export const InputContainer = styled.div`
    margin-top: 10px;


    input {
        padding: 20px;
        width: 40%;
        margin-right: 10px;
        border-radius: 20px;
        border: none;
        outline: none;
    }

    button {
        padding: 20px;
        border-radius: 20px;
        border: none;
        outline: none;
        background: #000;
        color: #fff;
    }



    @media screen and (max-width: 600px) {
        width: 100%;

        input {
            width: 80%;
        }
       button {
        width: 50%;
        margin-top: 20px;
       }
    }
`
