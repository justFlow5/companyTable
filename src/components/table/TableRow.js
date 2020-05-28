import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

const Row = styled.tr`
  margin-bottom: 10px;

  &:nth-child(even) {
    background-color: #eaeaea;
  }
  &:nth-child(odd) {
    background-color: #fff;
  }

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  & td {
    padding: 10px 15px;
    font-size: 21px;
    position: relative;

    &::before {
      content: attr(data-title);
      left: 0;
      padding-left: 10px;
      vertical-align: middle;
      font-weight: bold;
      font-size: 18px;
      text-align: left;
      position: absolute;

      @media ${device.tablet} {
        display: none;
      }
    }

    @media ${device.tablet} {
      font-size: 19px;
    }
  }
`;
const TableRow = ({ headers }) => {
  return (
    <Row>
      <td data-title={headers.id}>fds</td>
      <td data-title={headers.name}>adsfasd</td>
      <td data-title={headers.city}>Basdadssad</td>
      <td data-title={headers.totalIncome}>BL33</td>
      <td data-title={headers.averageIncome}>2232</td>
      <td data-title={headers.lastMonthIncome}>adsa</td>
    </Row>
  );
};

export default TableRow;
