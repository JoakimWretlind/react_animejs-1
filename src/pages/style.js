import styled from 'styled-components';

export const Section = styled.section`
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
      background: radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 69%, rgba(2,0,36,1) 100%);
    }
    &#input{
      background: linear-gradient(-185deg, rgba(85,1,150,1) 0%, rgba(159,0,194,1) 34%, rgba(219,3,200,1) 100%);
    }
    &#stagger{
background: linear-gradient(90deg, rgba(1,50,3,1) 0%, rgba(67,140,57,1) 35%, rgba(142,196,38,1) 100%);    }
    &#grid{
background: radial-gradient(circle, rgba(179,0,0,1) 0%, rgba(64,0,0,1) 100%);    }
    &#timeline{
      background: radial-gradient(circle, rgba(255,197,1,1) 0%, rgba(235,126,0,1) 100%);
    }
`;

export const Square = styled.div`
    height: 2rem;
    width: 2rem;    
  &.square{
    background: hsl(240, 86%, 15%);
  }
  &.squareTwo{
    background-color: #fff;
    margin: .1rem;
  }
  &.squareThree{
      background: #fbfbe1;
    }
  &.squareFour{
      background: hsl(32, 100%, 46%);
    }
`;

export const Input = styled.input`
    padding: .3rem;
    outline: none;
    border: none;
    border-radius: .4rem;
    font-size: 2.2rem;
    font-family: 'montserrat', sans-serif;
    letter-spacing: .5rem;
    text-align: center;
    background: #222;
    color: #fff;
    box-shadow: .1rem .4rem .8rem rgba(65, 5, 71, .7);
    transition: .3s ease-out;
    &:hover{
      cursor: crosshair;
      transform: translateY(.1rem);
      box-shadow: 0 .2rem .4rem rgba(22, 2, 24, .7);
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 2rem);
    grid-template-rows: repeat(5, 2rem);
    grid-gap: .08rem;
`;