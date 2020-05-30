import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

import Pagination from '../table/pagination/Pagination';

const FooterBar = styled.div`
  width: 100%;
  min-height: 90px;
  position: relative;
  background: #660066;
  border-radius: 0 0 6px 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    min-height: 50px;
  }
`;

const Footer = ({
  itemsPerPage,
  itemsCount,
  setCurrentPage,
  currentPage,
  defaultItemsPerPage,
  firstItemIndex,
  lastItemIndex,
}) => {
  return (
    <FooterBar>
      <Pagination
        itemsPerPage={itemsPerPage}
        itemsCount={itemsCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        firstItemIndex={firstItemIndex}
        lastItemIndex={lastItemIndex}
      />
    </FooterBar>
  );
};

export default Footer;
