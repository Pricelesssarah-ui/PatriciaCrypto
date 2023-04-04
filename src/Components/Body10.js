import React from 'react'
import { StyledBody10, Body10Container, Body10Section1, Body10Section2, Body10Section3 } from './Styles/Body10.styled';




function Body10() {
  return (

    <StyledBody10>
        <Body10Container>
            <Body10Section1>
                <img src='../../../assets/page11Pic1.png' alt='' />
                <h2>The Patricia Academy</h2>

                <button>
                    Get Started
                </button>
            </Body10Section1>


            <Body10Section2>
                <img src='../../../assets/page11Pic2.png' alt='' />
            </Body10Section2>


            <Body10Section3>
                <button>
                    New Courses
                </button>

                <h1>All You Need To Know About Crypto Fees.</h1>

                <p>Apart from the market price of bitcoin, each exchange
                    charges their clients a sort of commission for using their 
                    services in the Crypto space. These fees includes Maker which 
                    adds to the order book liquidity through limit (orders) and 
                    Taker which subtracts liquidity from an order book through market order fees.
                </p>

                <hr />


                <p>Cryptocurrency</p>
                
            </Body10Section3>
        </Body10Container>
    </StyledBody10>
  )
}

export default Body10