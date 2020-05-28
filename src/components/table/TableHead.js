import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

const TableHeader = styled.thead`
  display: none;
  @media ${device.tablet} {
    display: table-header-group;
  }
`;

const TableHeaderContent = styled.th`
  background: #660066;
  color: white;
  font-size: 19px;
  text-align: center;
  vertical-align: middle;
  line-height: 0.9;
`;

const TableHead = ({ headers }) => {
  const generateHeader = (headersObj) => {
    return Object.keys(headersObj).map((dataLabel) => (
      <TableHeaderContent>{headers[dataLabel]}</TableHeaderContent>
    ));
  };
  return (
    <TableHeader>
      <tr>
        {/* {Object.keys(headers).map((dataLabel) => (
          <TableHeaderContent>{headers[dataLabel]}</TableHeaderContent>
        ))} */}
        {generateHeader(headers)}
      </tr>
    </TableHeader>
  );
};

export default TableHead;
