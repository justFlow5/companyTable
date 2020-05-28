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

const TableRow = ({ headers, company }) => {
  const {
    id,
    name,
    city,
    totalIncome,
    averageIncome,
    lastMonthIncome,
  } = company;

  const getCurrencyFormat = (num) =>
    num.toLocaleString('pl-PL', {
      style: 'currency',
      currency: 'PLN',
    });

  return (
    <Row>
      <td data-title={headers.id}>{id}</td>
      <td data-title={headers.name}>{name}</td>
      <td data-title={headers.city}>{city}</td>
      <td data-title={headers.totalIncome}>{getCurrencyFormat(totalIncome)}</td>
      <td data-title={headers.averageIncome}>
        {getCurrencyFormat(averageIncome)}
      </td>
      <td data-title={headers.lastMonthIncome}>
        {getCurrencyFormat(lastMonthIncome)}
      </td>
    </Row>
  );
};

export default TableRow;
