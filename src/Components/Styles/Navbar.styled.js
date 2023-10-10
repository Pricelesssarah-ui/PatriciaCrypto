import styled from "styled-components";
import { Container } from "../../GlobalStyles.styled";
import{ Link } from "react-router-dom";




export const StyledBackground = styled.div`
    background-image: url(../../../assets/page1Pic1.jpg);
    width: 100%;
    height: 130vh;
    background-size: cover;

    
    @media screen and (max-width: 600px) {
        height: 100vh;
    }

    @media screen and (max-width: 896px) {
        height: 90vh;
    }

`



export const Nav = styled.nav`
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;

    @media screen and (max-width: 1200px) {
        font-size: 1.5rem;
    }
`



export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 160px;

    ${Container}
`



export const NavLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;

`



export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:960px) {
        display: block;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        padding-top: 0;
        margin-top: -4rem;
        padding-left: 0.1rem
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 70vh;
        position: absolute;
        top: 130px;
        left: ${({click}) => (click ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: #033135;
    }
`


export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #4b59f7;
}


        @media screen and (max-width: 960px) {
            width: 100%;
            height: 50px;
            
            &:hover {
                border: none;
            }
        }
    
`


export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;


@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}
`

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px; 
}
    
`


export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;


    Button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 1200px) {
        font-size: 1.5rem;
    }
`



export const NavBottom = styled.div`
    padding: 10px;


    @media screen and (max-width: 600px) {
        margin-left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }



    @media screen and (max-width: 1200px) {
       
    }
`


export const Image = styled.div`
   

    img {
        padding-top: 100px;
    }

    
    @media screen and (max-width: 600px) {
        display: none;
    }

`



export const NavText = styled.div`
    padding: 0;
    color: white;
    margin-left: 25rem;
    margin-top: -30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


    h1 {
        font-size: 50px;
        margin: 0;
    }

    p {
        font-size: 12px;

    }



    @media screen and (max-width: 600px) {
        margin-left: 10px;
        text-align: center;
        margin-top: 5rem;

        h1 {
            font-size: 20px;
            margin-top: 0;
        }

        p {
        font-size: 10px;
        }
    }



    @media screen and (max-width: 1200px) {
        margin-left: 10px;
        text-align: center;
        margin-top: 5rem;

        h1 {
            font-size: 40px;
            margin-top: 0;
        }

        p {
        font-size: 20px;
        }
    }
`


export const NavBtn = styled.div`
    display: flex;

    Button 
    {
        margin: 20px;
        background: white;
    
    }


    @media screen and (max-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: center;


        Button {
         width: 10rem;
        }


    }

`


export const NavPhoto = styled.div`
    margin-top: -25rem;
    padding: 20px 0;
    margin-left: 50rem;
   

    @media screen and (max-width: 600px) {
       display: none;
    }


    @media screen and (max-width: 1200px) {
        display: none;
    }
`


export const NavEdge = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid black;
    background: gray;
    opacity: 0.7;
    margin-top: -120px;
    bottom: 0;
    position: relative;


    @media screen and (max-width: 960px) {
        margin-top: 125px;
        display: none;
        

    }

`


export const NavList = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 10px;
    font-size: 13px;
    border-right: 1px solid white;
    padding: 7px;
    color: white;

    img {
        width: 3rem;
        height: 3rem;
        padding-right: 10px;
    }
 
`