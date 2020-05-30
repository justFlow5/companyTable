import React from 'react';
import styled from 'styled-components';

import TableHead from './TableHead';
import TableRow from './TableRow';

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

    &:first-child {
      width: 10%;
    }

    &:nth-child(2) {
      width: 25%;
    }

    &:nth-child(3) {
      width: 20%;
    }
  }

  @media (max-width: 768px) {
    & tr {
      border: 1px solid #804d9c;
      border-bottom: 5px solid #660066;
      display: block;
    }

    & td {
      border-bottom: 1px solid #804d9c;
      display: block;
      text-align: right;

      padding-left: 45%;
    }

    & td:last-child {
      border-bottom: 0;
    }
  }
`;

const Table = ({
  itemsPerPage,
  handleSortTypeChange,
  sortType,
  isFullData,
  currentCompanies,
  isInitData,
}) => {
  const headers = {
    id: 'ID',
    name: 'Name',
    city: 'City',
    totalIncome: 'Total Income',
    averageIncome: 'Average Income',
    lastMonthIncome: 'Last Month Income',
  };

  const renderRows = () => {
    if (isInitData || isFullData) {
      return currentCompanies.map((company, key) => (
        <TableRow key={key} headers={headers} company={company} empty={false} />
      ));
    } else {
      let rows = [];
      for (let i = 0; i <= itemsPerPage; i++) {
        rows.push(<TableRow key={i} headers={headers} empty={true} />);
      }
      return rows;
    }
  };

  return (
    <TableComponent>
      <TableHead
        headers={headers}
        handleSortTypeChange={handleSortTypeChange}
        sortType={sortType}
        isFullData={isFullData}
      />
      <tbody>{renderRows()}</tbody>
    </TableComponent>
  );
};

export default Table;
