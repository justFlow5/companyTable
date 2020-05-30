import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

import ItemsPerPageInput from './ItemsPerPageInput';
import FilterBox from './FilterBox';

const MenuBar = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  background: #660066;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = ({
  itemsPerPage,
  handleNumOfItems,
  isFullData,
  companies,
  setDisplayedCompanies,
  setCurrentPage,
}) => {
  return (
    <MenuBar>
      <ItemsPerPageInput
        handleNumOfItems={handleNumOfItems}
        isFullData={isFullData}
        itemsPerPage={itemsPerPage}
      />
      <FilterBox
        companies={companies}
        setDisplayedCompanies={setDisplayedCompanies}
        setCurrentPage={setCurrentPage}
      />
    </MenuBar>
  );
};

export default Menu;
