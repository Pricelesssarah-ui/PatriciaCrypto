import React from 'react';
import { StyledBody3, Body3Page, Body3Text, Body3Image } from './Styles/Body3.styled';

function Body3() {
  return (
    <StyledBody3>
    
        <Body3Page>
            <Body3Text>
                <h2>Your Gateway To <br /> Crypto</h2>
                <p>More than creating a seamless platform for you to perform crypto
                    transactions, we are with you every step of the way, providing you 
                    with tips and tricks to becoming a crypto guru.
                </p>
            </Body3Text>

            <Body3Image>
                <img src='../../../assets/page4Pic1.png' height={940} alt='' />
            </Body3Image>
        </Body3Page>

    </StyledBody3>
  )
}

export default Body3;