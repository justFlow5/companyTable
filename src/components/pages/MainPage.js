import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Table from '../table/Table';
import { device } from '../../media/mediaQuery';
import Header from '../header/Header';

import {
  sumUp,
  getLastMonth,
  sortASC,
  sortDESC,
} from '../../helperFuntions/helperFunctions';

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
  /* padding: 0 10px; */

  /* scrollbar styling FIREFOX etc */
  scrollbar-width: thin;
  scrollbar-color: #5b005b #d7bdd7;

  /* scrollbar styling CHROME */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #d7bdd7;
    border-radius: 4px;
    border: 1px solid #520052;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #5b005b;
    border-radius: 4px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #520052;
  }
`;

const MainPage = () => {
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    let res = await axios.get('https://recruitment.hal.skygate.io/companies');
    let sortedCompanies = sortASC(res.data, 'id');
    return sortedCompanies;
  };

  const getCompaniesData = async (arr, initial = false) => {
    let lastMonth = getLastMonth();
    const companiesData = arr.map(async (company) => {
      const res = await axios.get(
        `https://recruitment.hal.skygate.io/incomes/${company.id}`
      );
      const incomesArr = res.data.incomes;

      const totalIncome = sumUp(incomesArr);
      const averageIncome = parseFloat(
        (totalIncome / incomesArr.length).toFixed(2)
      );
      const lastMonthIncome = sumUp(
        incomesArr.filter((income) => income.date.startsWith(lastMonth))
      );
      return {
        ...company,
        totalIncome,
        averageIncome,
        lastMonthIncome,
      };
    });
    const results = await Promise.all(companiesData);
    return results;
  };

  useEffect(() => {
    (async () => {
      let data = await getCompanies();
      let completeData = await getCompaniesData(data, true);
      setCompanies([...companies, ...completeData]);
    })();
  }, []);

  return (
    <PageWrapper>
      <Header content="Recruitment Task" />
      <TableContainer>
        <Table companies={companies} />
      </TableContainer>
    </PageWrapper>
  );
};

export default MainPage;
