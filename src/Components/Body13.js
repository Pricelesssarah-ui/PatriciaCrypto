import React from 'react';
import { StyledBody13, Body13Container, Body13Text, InputContainer, Body13Image } from './Styles/Body13.styled'

function Body13() {
  return (

    <StyledBody13>

        <Body13Image>
            <img src='../../../assets/page14Pic1.png' alt='' />
        </Body13Image>



        <Body13Container>

            <Body13Text>
                <h1>Subscribe To Our Newsletter</h1>
                <p>Apart from a man tripping down the different crypto
                    dips, there's a lot to explore in the Crypto space and
                    we'd love to share that with you. Be it our product
                    update, a new crypto fact, or a random recipe we pasted by accident.
                </p>
            </Body13Text>


            <InputContainer>
                <input type='text' />
                <button>Subscribe for Free</button>
            </InputContainer>

        </Body13Container>


    </StyledBody13>
  )
}

export default Body13;