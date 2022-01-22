import styled from 'styled-components';

export const Section = styled.section`
    overflow: hidden;
    height: 100vh;
    width: 100%;
    padding: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
      background: orange;
    }
    &#input{
      background: violet;
    }
    &#stagger{
      background: blueviolet;
    }
    &#grid{
      background: orangered;
    }
    &#timeline{
      background: red;
    }
`;

export const Square = styled.div`
    height: 2rem;
    width: 2rem;    
  &.square{
    background-color: red;
  }
  &.squareFour{
      background-color: #6D8C50;
    }
`;

export const SquareTwo = styled.div`
    height: 2rem;
    width: 2rem;    
  &.squareTwo{
    background-color: maroon;
    margin: .1rem;
  }
`;

export const SquareThree = styled.div`
    height: 100%;
    width: 100%;
    &.squareThree{
      background-color: brown;
    }
    
`;


export const Input = styled.input`
    padding: .3rem;
    outline: none;
    border: .1rem solid black;
    border-radius: .4rem;
    font-size: 1.8rem;
    font-family: 'montserrat', sans-serif;
    letter-spacing: .1rem;
    text-align: center;
    background: #222;
    color: #fff;
    &#demo-input{}
`;

export const GridContainer = styled.div`
    height: 50vh;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(12, 2rem);
    grid-template-rows: repeat(5, 2rem);
    grid-gap: .08rem;
`;