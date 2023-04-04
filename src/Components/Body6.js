import React from 'react';
import { StyledBody6, Body6Text, Body6Section, Body6Product } from './Styles/Body6.styled';






function Body6() {
  return (
    <StyledBody6>

        <Body6Text>

            <Body6Section>
                <img src='../../../assets/page7Pic1.png' alt='' />
                <h2>Patricia is secure and trustworthy</h2>
                <p>Trusted by millions globally for its secure
                    platform, we are confident to say that your
                    crypto is in the right hands.
                </p>
            </Body6Section>

            <Body6Section>
                <img src='../../../assets/page7Pic2.png' alt='' />
                <h2>Patricia is easy-to-use</h2>
                <p>Everyone loves an easy-to-use platform, 
                    that is why our top priority is providng you
                    with seamless services you can enjoy
                    without breaking a sweat.
                </p>
            </Body6Section>

            <Body6Section>
                <img src='../../../assets/page7Pic3.png' alt='' />
                <h2>Patricia is built for you</h2>
                <p>Every one of our services is built with you in
                    mind. Beating our chest we can say, we give 
                    you the best crypto experience.
                </p>
            </Body6Section>
            
        </Body6Text>




        <Body6Product>
            <h1>More Awesome Products In <br /> Our Universe</h1>
        </Body6Product>


      

    </StyledBody6>
  )
}

export default Body6