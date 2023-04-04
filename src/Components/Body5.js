import React from 'react'
import { StyledBody5, Body5Text, Body5Image, Body5Trade, Body5Option} from './Styles/Body5.styled';




function Body5() {
  return (
    <StyledBody5>

        <Body5Text>

            <h1>Do More With Crypto</h1>
            <p>With Patricia Refill, you can buy data, pay your cable bills, and <br />
                buy airtime both locally and internationally, all with crypto.
            </p>

            <Body5Trade>
                   
                <Body5Option>
                    <img src='../../../assets/page6Pic1.png' alt='' />
                    <h4>Real time wallet Value</h4>
                </Body5Option>

                <Body5Option>
                    <img src='../../../assets/page6Pic1.png' alt='' />
                    <h4>Seamless Crypto transactions</h4>
                </Body5Option>

                <Body5Option>
                    <img src='../../../assets/page6Pic1.png' alt='' />
                    <h4>Real time Crypto values</h4>
                </Body5Option>

            </Body5Trade>


        </Body5Text>


        <Body5Image>
            <img src='../../../assets/page6Pic2.png' alt='' />
        </Body5Image>


        <Body5Image>
            <img src='../../../assets/page6Pic3.png' alt='' />
        </Body5Image>
    </StyledBody5>
  )
}

export default Body5