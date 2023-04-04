import React from 'react';
import { StyledBody4, Body4Page, Body4Image, Body4Text, Body4Trade, Body4List, Body4Option } from './Styles/Body4.styled';

function Body4() {
  return (
    <StyledBody4>
        <Body4Page>
            <Body4Image>
                <img src='../../../assets/page5Pic1.png' alt='' />
            </Body4Image>

            <Body4Text>
                <h1>Crypto <br /> <span>Trading, Simplified</span> </h1>
                <p>Think lifting a feather is effortless? Try trading with Patricia</p>
            



                <Body4Trade>
                    <Body4List>
                        <Body4Option>
                            <img src='../../../assets/page5Pic2.png' alt='' />
                            <h4>Real time wallet Value</h4>
                        </Body4Option>

                        <Body4Option>
                            <img src='../../../assets/page5Pic2.png' alt='' />
                            <h4>Real time Crypto values</h4>
                        </Body4Option>
                    </Body4List>



                    <Body4List>
                        <Body4Option>
                            <img src='../../../assets/page5Pic2.png' alt='' />
                            <h4>Seamless Crypto transactions</h4>
                        </Body4Option>

                        <Body4Option>
                            <img src='../../../assets/page5Pic2.png' alt='' />
                            <h4>Crypto answers at your finger tips</h4>
                        </Body4Option>
                    </Body4List>
                </Body4Trade>



            </Body4Text>
        </Body4Page>
    </StyledBody4>
  )
}

export default Body4