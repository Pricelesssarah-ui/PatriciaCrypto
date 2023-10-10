import React from 'react';
import  { StyledBody2, Body2Page, Body2Text, Body2Cards, Body2Image } from "./Styles/Body2.styled";


function Body2() {
  return (
    <StyledBody2>
        <Body2Page>
            <Body2Text>
                <h1>Crypto Without The <br /> Clutter</h1>
                <p>Ever imagined crypto being fun as well as functional? Well, we too have, <br />
                    and we have created Patricia to do just that. Come on board and <br />
                    experience crypto the redefined way.
                </p>

              
                <button>
                    Get started for free
                </button>

                <Body2Cards>
                    <img src='../../../assets/page3Pic1.png' alt='' />
                    <img src='../../../assets/page3Pic2.png' alt='' />
                    <img src='../../../assets/page3Pic3.png' alt='' />
                    <img src='../../../assets/page3Pic4.png' alt='' />
                    <img src='../../../assets/page3Pic5.png' alt='' />
                </Body2Cards>
              
            </Body2Text>




            <Body2Image>
                <img src='../../../assets/page3Pic6.png' alt='' />
            </Body2Image>
       </Body2Page>
        
    </StyledBody2>
  )
}

export default Body2