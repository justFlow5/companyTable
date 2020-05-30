import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

const Row = styled.tr`
  @media ${device.tablet} {
    margin-bottom: 10px;
  }

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
    padding-left: 45%;

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

const TableRow = ({ headers, company, empty }) => {
  const getCurrencyFormat = (num) =>
    num.toLocaleString('en-GB', {
      style: 'currency',
      currency: 'EUR',
    });

  return (
    <Row>
      <td data-title={headers.id}>{empty ? '\u00A0' : company.id}</td>
      <td data-title={headers.name}>{empty ? '\u00A0' : company.name}</td>
      <td data-title={headers.city}>{empty ? '\u00A0' : company.city}</td>
      <td data-title={headers.totalIncome}>
        {getCurrencyFormat(empty ? '\u00A0' : company.totalIncome)}
      </td>
      <td data-title={headers.averageIncome}>
        {getCurrencyFormat(empty ? '\u00A0' : company.averageIncome)}
      </td>
      <td data-title={headers.lastMonthIncome}>
        {getCurrencyFormat(empty ? '\u00A0' : company.lastMonthIncome)}
      </td>
    </Row>
  );
};

export default TableRow;
