import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

const Caption = styled.caption`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 30px;
  letter-spacing: 1.7px;

  color: #ead5ef;

  text-shadow: 2px 2px 0 #660066, 2px -2px 0 #660066, -2px 2px 0 #660066,
    -2px -2px 0 #660066, 2px 0px 0 #660066, 0px 2px 0 #660066,
    -2px 0px 0 #660066, 0px -2px 0 #660066;
`;

const CaptionComponent = ({ content }) => {
  return <Caption>{content}</Caption>;
};

export default CaptionComponent;
