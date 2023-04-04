import React from 'react';
import { StyledBody1, Title, Image } from "./Styles/Body1.styled";




function Body1() {
  return (


    <StyledBody1>
        <Title>
            <h1>Patricia Universe, <br /> Crypto is Oxygen To Us</h1>
            <p>We like to think of ourselves as superheroes here at Patricia. <br />
                We aren't in the business of doing things just  because they <br />
                are routine. We are in the business of creating solutions that <br />
                are simply mind-blowing.
            </p>
        </Title>


        <Image>
            <img src='../../../assets/page2Pic2.png' alt='' />

            <div>
                <h2>Meet the Humans of <br /> Patricia</h2>

                <hr />
            </div>
        </Image>


    </StyledBody1>

  )
}

export default Body1