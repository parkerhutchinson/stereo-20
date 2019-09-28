import React from 'react';
import styled from 'styled-components';
import Section from '../03_organisms/section';
import Ticker from '../02_molecules/ticker';
const eye = require('~/static/images/svg/eye.svg');

const StyledEye = styled.div`
  grid-column: 6 / span 18;
  
  img{
    display: block;
    width: 100%;
    position: relative;
    z-index: 1;
  }   
`;

const Capabilites = () => {
  return (
    <Section label="">
      <StyledEye>
        <Ticker/>
        <img src={eye} alt=""/>
      </StyledEye>
    </Section>
  )
}


export default Capabilites;