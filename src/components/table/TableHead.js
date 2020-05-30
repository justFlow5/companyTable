import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';
import IconSortASC from '../../icons/sortASCicon';
import IconSortDESC from '../../icons/sortDESCicon';

const CaretContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  top: 50%;
  transform: translateY(-50%);

  & svg {
    width: 10px;
    height: 10px;
    display: block;
    text-align: center;
    fill: white;

    &.deactivated {
      display: none;
    }
  }
`;

const TableHeader = styled.thead`
  display: none;
  @media ${device.tablet} {
    display: table-header-group;
    position: relative;

    border-top: 1px solid #7d097d;
  }
`;

const TableHeaderContent = styled.th`
  background: #660066;
  color: white;
  font-size: 19px;
  text-align: center;
  vertical-align: middle;
  line-height: 0.9;
  position: relative;
  border-right: 1px solid #7d097d;
  &:last-child {
    border-right: 1px solid #660066;
  }

  & > h3 {
    padding-right: 10px;
  }
`;

const SortButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  border: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
`;

const TableHead = ({ headers, handleSortChange }) => {
  const generateHeader = (headersObj) => {
    return Object.keys(headersObj).map((dataLabel) => (
      <TableHeaderContent>
        <h3>{headers[dataLabel]}</h3> <SortButton onClick={() => {}} />
        <CaretContainer>
          <IconSortDESC />
          <IconSortASC />
        </CaretContainer>
      </TableHeaderContent>
    ));
  };

  return (
    <TableHeader>
      <tr>{generateHeader(headers)}</tr>
    </TableHeader>
  );
};

export default TableHead;
