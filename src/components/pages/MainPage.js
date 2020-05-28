import React from 'react';
import styled from 'styled-components';
import Table from '../table/Table';
import { device } from '../../media/mediaQuery';
import Header from '../header/Header';

const PageWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #594e6f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e9e4f0,
    #594e6f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e9e4f0,
    #594e6f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TableContainer = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  overflow: auto;
  padding: 0 10px;
  @media ${device.tablet} {
    width: 80%;
  }
`;

const MainPage = (props) => {
  return (
    <PageWrapper>
      <Header content="Recruitment Task" />
      <TableContainer>
        <Table />
      </TableContainer>
    </PageWrapper>
  );
};

export default MainPage;
