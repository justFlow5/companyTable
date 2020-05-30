import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

const Header = styled.h3`
  display: none;

  position: relative;
  width: 100%;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  /* margin: 0 auto 30px; */
  letter-spacing: 1.7px;
  padding: 20px;

  color: #ead5ef;

  text-shadow: 2px 2px 0 #660066, 2px -2px 0 #660066, -2px 2px 0 #660066,
    -2px -2px 0 #660066, 2px 0px 0 #660066, 0px 2px 0 #660066,
    -2px 0px 0 #660066, 0px -2px 0 #660066;

  @media ${device.tablet} {
    display: block;
  }
`;

const HeaderComponent = ({ content }) => {
  return <Header> {content} </Header>;
};

export default HeaderComponent;
