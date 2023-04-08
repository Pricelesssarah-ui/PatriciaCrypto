import styled from "styled-components";



export const StyledBody14 = styled.div`
    
   
`



export const Body14Image = styled.div`
    img {
        margin: 10px 40px;
    }



    @media screen and (max-width: 1200px) {
        img {
            width: 90%;
            margin: 10px 20px;
        }
    }

    @media screen and (max-width: 600px) {
        img {
            width: 89.7%;
            margin: 10px 20px;
        }
    }


    
`


export const FooterContainer = styled.div`
    padding: 40px;
    background: #006156;
    height: 160vh;
    margin: -16px 40px;
    border: 1.5px solid blue;


    p {
        padding: 20px 0;
    }



    @media screen and (max-width: 1200px) {
        margin: -16px 20px;
        padding: 20px;
        height: 130vh;


        p {
        font-size: 12px;
        padding: 10px 0;
        }
    }


    @media screen and (max-width: 600px) {
        margin: -16px 20px;
        padding: 20px;
        height: 150vh;


        p {
        font-size: 12px;
        padding: 10px 0;
        }
    }
    

`




export const FooterText = styled.div`
    color: #fff;

    p {
        font-size: 12px;
    }

    @media screen and (max-width: 600px) {
        p {
            font-size: 10px;
        }
    }


`


export const BitcoinImage = styled.div`
    img {
        width: 100px;
        height: 100px;
        float: right;
        margin-top: -20px;
    }



    @media screen and (max-width: 600px) {

        img {
            width: 60px;
            height: 60px;
            margin-top: -10px;
        }
    }



    @media screen and (max-width: 1200px) {

        img {
            width: 60px;
            height: 60px;
            margin-top: -10px;
        }
    }
`



export const CardLogo = styled.div`
    margin: 50px 0 80px 0;
    background: #1816164A;
    border-radius: 10px;


    
    @media screen and (max-width: 600px) {
        height: 50vh;
    }

    @media screen and (max-width: 1200px) {
        height: 50vh;
    }
`



export const LogoText = styled.div`
    color: #fff;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;

    h5 {
        font-size: 17px
    }

    
    @media screen and (max-width: 600px) {
        display: block;
    }

    @media screen and (max-width:   1200px) {
        display: block;
    }
`


export const Logo = styled.div`
    background: #fff;
    width: 80%;
    margin-left: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;



    img {
       margin: 0 60px;
    }


    
    @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 20px 0;
        padding: 10px;
        width: 100%;
        height: 35vh;

        img {
            margin: 0 10px;
        }
    }


    @media screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 20px 0;
        padding: 10px;
        width: 100%;
        height: 35vh;

        img {
            margin: 0 10px;
        }
    }

`




export const TableContainer = styled.div`
    margin: 40px 0;
    font-size: 12px;

    table {
        text-align: left;
        padding: 30px;
        color: #fff;
    }

    tr {
        margin-left: 20rem;
    }
    td, th {
        margin: 30px;
        padding: 10px 90px;
    }


    @media screen and (max-width: 1200px) {
        font-size: 12px;
        margin: 30px;

        table{
            padding: 2px 20px;
            margin: 20px 20px;
        }
        
        tr {
            margin-left: 10rem;
        }
        td, th {
            padding: 5px 20px;
        }
    }

    @media screen and (max-width: 600px) {
        font-size: 5px;
        margin: 20px 0;

        table{
            padding: 2px;
        }
        
        tr {
            margin-left: 0;
        }
        td, th {
            margin: 2px;
            padding: 2px 6px;
        }
    }
`



export const MainFooter = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    padding: 30px 5px 10px 5px;
    width: 90%;
    margin: 0 auto;



    @media screen and (max-width: 1200px) {
        padding: 1rem 2rem;
        margin: 0;
        color: #fff;
        display: flex;
        align-items: flex-start;
    }


    @media screen and (max-width: 600px) {
        padding: 10px 0;
        margin: 0;
        color: #fff;
        display: flex;
        align-items: flex-start;
    }


` 


export const FooterLogo = styled.div`
  padding:  10px 40px;

  p{
    font-size: 12px;
  }


  @media screen and (max-width: 1200px) {
    padding:  10px;


    img {
        width: 40%;
        height: 40%;
    }

    p{
        font-size: 12px;
    }

    h5 {
        font-size: 7px;
    }
  }


  @media screen and (max-width: 600px) {
    padding:  10px;


    img {
        width: 40%;
        height: 40%;
    }

    p{
        font-size: 5px;
    }

    h5 {
        font-size: 7px;
    }
  }


 
`


export const FooterContact = styled.div`
    padding:  10px 120px;

    p{
        font-size: 12px;
    }


  @media screen and (max-width: 1200px) {
    padding:  0 2rem;


    p{
        font-size: 12px;
    }

    h5 {
        font-size: 7px;
    }
  }


  @media screen and (max-width: 600px) {
    padding:  10px;


    p{
        font-size: 5px;
    }

    h5 {
        font-size: 7px;
    }
  }
`


export const FooterAddress = styled.div`
    padding:  10px 10px;

    p{
        font-size: 12px;
    }


    
  @media screen and (max-width: 1200px) {
    padding: 0 2rem;
    width: 50rem;


    p{
        font-size: 12px;
    }

    h5 {
        font-size: 7px;
    }
  }

@media screen and (max-width: 600px) {
    padding:  10px 5px;


    p{
        font-size: 5px;
    }

    h5 {
        font-size: 7px;
    }
  }

`


export const FooterState = styled.div`
    padding:  10px 0;

    p{
        font-size: 12px;
    }



      @media screen and (max-width: 1200px) {
            padding: 0 2rem;
            width: 50rem;

            h5 {
                font-size: 7px;
            }

            p{
                font-size: 12px;
            }

        
        }

    @media screen and (max-width: 600px) {
        padding:  10px;

        h5 {
            font-size: 7px;
        }

        p{
            font-size: 5px;
        }

    
    }


`