import React from 'react'
import { StyledBody14, Body14Image, FooterContainer, FooterText, BitcoinImage, CardLogo, LogoText, Logo, TableContainer, MainFooter, FooterLogo, FooterContact, FooterAddress, FooterState } from './Styles/Body14.styled'

function Body14() {
  return (

    <StyledBody14>

        <Body14Image>
            <img src='../../../assets/page15Pic1.png' alt='' />
        </Body14Image>  


        <FooterContainer>
            <FooterText>
                <img src='../../../assets/logo-1.png' alt='' />

                <p>Patricia is an alternative payment solutions company that 
                    facilitates the easy use of cryptocurrencies for everyday
                    transactions. By harnessing the intrinsic power of Blockchain
                    Technology. Patricia is set to make Crypto easy for mankind, hereby 
                    creating a new and sustainable path for the present and future generations.
                </p>

                <BitcoinImage>
                    <img src='../../../assets/bitcoin.png' alt='' />
                </BitcoinImage>

                <p>ISO Certification (ISO 9001, 27001).</p>
            </FooterText>



            <CardLogo>
                <LogoText>
                    <h5>Partners and accolades</h5>


                    <Logo>
                        <img src='../../../assets/page3Pic1.png' alt='' />
                        <img src='../../../assets/page3Pic2.png' alt='' />
                        <img src='../../../assets/page3Pic3.png' alt='' />
                        <img src='../../../assets/page3Pic4.png' alt='' />
                        <img src='../../../assets/footer.png' alt='' />
                    </Logo>
                </LogoText>

            </CardLogo>

            <hr />


            


            <TableContainer>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Company</th>
                        <th>Learn</th>
                        <th>Legal</th>
                    </tr>

                    <tr>
                        <td>Refill</td>
                        <td>About Us</td>
                        <td>Blog</td>
                        <td>Privacy Policy</td>
                    </tr>

                    <tr>
                        <td>Hank</td>
                        <td>Careers</td>
                        <td>Learning Portal</td>
                        <td>Anti-Money Laundering Policy</td>
                    </tr>

                    <tr>
                        <td>Patricia Card (Coming Soon)</td>
                        <td></td>
                        <td>Help Centre</td>
                        <td>Terms and Conditions</td>
                    </tr>

                    <tr>
                        <td>Patricia Business (Coming Soon)</td>
                        <td></td>
                        <td>Create Ticket</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>OTC</td>
                        <td></td>
                        <td>Crypto Dictionary</td>
                        <th>Community</th>
                    </tr>

                    <tr>
                        <td>Patricia Merch;iu</td>
                        <td></td>
                        <td></td>
                        <td>Covid-19</td>
                    </tr>
                </table>
            </TableContainer>


            <hr />




            <MainFooter>
                <FooterLogo>
                    <img src='../../../assets/logo.png' alt='' />
                    <p>@2021 Patricia Technologies. All Rights Reserved</p>
                </FooterLogo>


                <FooterContact>
                    <h5>Contact</h5>
                    <p>hello@patricia.co</p>
                    <p>support@mypatricia.co</p>
                </FooterContact>


                <FooterAddress>
                    <h5>Estonia</h5>
                    <p>Rannaku pst 12, Tallinn, 10917 Estonia (c/o Honnes Rosin)</p>

                    <h5>Ghana</h5>
                    <p>20, SCC Junction, Near The Taxi Rank, Weija, Accra.</p>
                </FooterAddress>


                <FooterState>
                    <h5>United Kingdom</h5>
                    <p>2nd Floor College House, 17 King Edwards Road
                        RUISLIP London HA4 7AE.
                    </p>
                    <h5>United States</h5>
                    <p>251 Little Falls Drive, Wilmington DE 19807.</p>
                </FooterState>

            </MainFooter>


        </FooterContainer>  



    </StyledBody14>
  )
}

export default Body14
