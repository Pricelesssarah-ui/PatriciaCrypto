import React from 'react';
import { StyledBody8, Body8ImageSection, Body8Image, Body8Text, Body8Button } from "./Styles/Body8.styled";




function Body8() {
  return (
    <StyledBody8>
        <h1>Learn - Your Dictionary To <br /> Everything Crypto</h1>


        <Body8ImageSection>

            <Body8Image>
                <img src='../../../assets/page9Pic1.png' alt='' />
                <Body8Text>
                    <p>Others </p>

                    <h4>Patricia Refill - A Crypto Payment Solution <br />
                        for Everyday Payments
                    </h4>

                    <p>In today's fast-paced worlds, its easy to get overwhelmed with 
                        a seemingly never-ending stream of obligations. That's why
                        finding easy solutions remains the bedrock of Patricia. We...
                    </p>
                </Body8Text>
            </Body8Image>


            <Body8Image>
                <img src='../../../assets/page9Pic2.png' alt='' />
                <Body8Text>
                    <p>Others </p>

                    <h4>Patricia Refill - A Crypto Payment Solution <br />
                        for Everyday Payments
                    </h4>

                    <p>In today's fast-paced worlds, its easy to get overwhelmed with 
                        a seemingly never-ending stream of obligations. That's why
                        finding easy solutions remains the bedrock of Patricia. We...
                    </p>
                </Body8Text>
            </Body8Image>

        </Body8ImageSection>



        <Body8Button>
            <button>See more</button>
        </Body8Button>
       

    </StyledBody8>
  )
}

export default Body8