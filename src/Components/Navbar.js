import React, { useState, useEffect } from "react";
import { StyledBackground, 
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon,  
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    NavBottom,
    NavText,
    NavBtn,
    NavPhoto,
    NavEdge,
    NavList,
    Image
} from "./Styles/Navbar.styled";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../GlobalStyles.styled";



function Navbar() {


    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }


    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener("resize", showButton);





    return(
        <StyledBackground>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarContainer>

                        <NavLogo to="/">
                            <img src="../../../assets/logo-1.png" alt="" />
                        </NavLogo>


                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>


                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/about">About Us</NavLinks>
                            </NavItem>


                            <NavItem>
                                <NavLinks to="/products">Products</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="/learn">Learn</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="/resources">Resources</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="/careers">Careers</NavLinks>
                            </NavItem>



                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-in">
                                        <Button primary>Sign In</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-in">
                                        <Button fontBig primary>
                                            Sign In
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>



                                    
                                <NavItemBtn>
                                    {button ? (
                                        <NavBtnLink to="/account">
                                            <Button>Create Account</Button>
                                        </NavBtnLink>
                                    ) : (
                                        <NavBtnLink to="/account">
                                            <Button>
                                                Create Account
                                            </Button>
                                        </NavBtnLink>
                                    )}
                                </NavItemBtn>
                        </NavMenu>


                    </NavbarContainer>
                </Nav>





                   
                        

                        <NavBottom>
                            <Image>
                                <img src="../../../assets/bitcoin.png" alt="" />
                            </Image>
                            
                            <NavText>
                                <h1>World's Easiest <br /> Crypto Exchange</h1>
                                <p>Join millions of people globally, to buy and
                                    sell cryptocurrencies the <br/> secure and seamless way.
                                </p>

                                <NavBtn>
                                    <Button>GET IT ON <br />
                                        <img src="../../../assets/page1Pic3.png" alt="" />
                                    </Button>

                                    <Button>
                                        <img src="../../../assets/page1Pic4.png" alt="" />
                                        Download on the <br /> App Store
                                    </Button>
                                </NavBtn>
                            </NavText>

                            <NavPhoto>
                                <img src="../../../assets/page1Pic2.png" alt="" />
                            </NavPhoto>
                        </NavBottom>




                        <NavEdge>
                            <NavList>
                                <img src="../../../assets/bitcoin.png" alt="" />
                                BTC/AED +1.74% <br /> AED 227,773.5
                            </NavList>

                            <NavList>
                                <img src="../../../assets/bitcoin.png" alt="" />
                                BTC/CNY +1.29% <br /> CNY 398,696.37
                            </NavList>

                            <NavList>
                                <img src="../../../assets/bitcoin.png" alt="" />
                                BTC/EUR +1.74% <br /> $53,398.93
                            </NavList>

                            <NavList>
                                <img src="../../../assets/bitcoin.png" alt="" />
                                BTC/GBP +1.04% <br /> $45,148.88
                            </NavList>

                            <NavList>
                                <img src="../../../assets/bitcoin.png" alt="" />
                                BTC/GHS +1.78% <br /> GHS 157,753.21
                            </NavList>

                            <NavList>
                                <img src="../../../assets/bitcoin.png" alt="" />
                                BTC/KES +1.16% <br /> KES 301,157.05
                            </NavList>

                            <NavList>
                                <img src="../../../assets/bitcoin.png" alt="" />
                                BTC/UGX +1.74% <br /> UGX 243,563.42
                            </NavList>
                        </NavEdge>


            </IconContext.Provider>
        </StyledBackground>
    )
}




export default Navbar;