import React from 'react';
import styled from 'styled-components';

import TableHead from './TableHead';
import TableRow from './TableRow';

import { device } from '../../media/mediaQuery';

const TableComponent = styled.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  & th,
  & td {
    padding: 10px 15px;
    text-align: center;
  }

  & th {
    letter-spacing: 1.5px;
  }

  @media (max-width: 768px) {
    & tr {
      border: 1px solid #804d9c;
      border-bottom: 3px solid #804d9c;
      display: block;
    }

    & td {
      border-bottom: 1px solid #804d9c;
      display: block;
      text-align: right;
    }

    & td:last-child {
      border-bottom: 0;
    }
  }
`;

const Table = (props) => {
  const headers = {
    id: 'ID',
    name: 'Name',
    city: 'City',
    totalIncome: 'Total Income',
    averageIncome: 'Average Income',
    lastMonthIncome: 'Last Month Income',
  };

  return (
    <TableComponent>
      <TableHead headers={headers} />
      <tbody>
        <TableRow headers={headers} />
        <TableRow headers={headers} />
        <TableRow headers={headers} />
      </tbody>
    </TableComponent>
  );
};

export default Table;
