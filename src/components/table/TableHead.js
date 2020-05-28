import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

const TableHeader = styled.thead`
  /* border: none;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; */
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
  return (
    <TableHeader>
      <tr>
        {Object.keys(headers).map((dataLabel) => (
          <TableHeaderContent>{headers[dataLabel]}</TableHeaderContent>
        ))}
      </tr>
    </TableHeader>
  );
};

export default TableHead;
