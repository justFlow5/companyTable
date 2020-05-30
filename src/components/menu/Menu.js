import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

import ItemsPerPageInput from './ItemsPerPageInput';

const MenuBar = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  background: #660066;
  border-radius: 6px 6px 0 0;
`;

const Menu = ({ itemsPerPage, handleNumOfItems, isFullData }) => {
  return (
    <MenuBar>
      <ItemsPerPageInput
        handleNumOfItems={handleNumOfItems}
        isFullData={isFullData}
        itemsPerPage={itemsPerPage}
      />
    </MenuBar>
  );
};

export default Menu;
