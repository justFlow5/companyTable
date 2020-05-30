import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Table from '../table/Table';
import { device } from '../../media/mediaQuery';
import Header from '../header/Header';

import Menu from '../menu/Menu';
import Footer from '../menu/Footer';

import {
  sumUp,
  getLastMonth,
  sortASC,
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
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    width: 95%;
  }

  @media ${device.tablet} {
    height: 95%;
  }
`;

const TableContainer = styled.div`
  overflow: auto;
  max-height: 75%;
  /* scrollbar styling FIREFOX  */
  scrollbar-width: thin;
  scrollbar-color: #d7bdd7 #5b005b;

  /* scrollbar styling CHROME */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #5b005b;
    /* border-radius: 4px; */
    border: 1px solid #520052;
    transition: all 0.3s;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #d7bdd7;
    border-radius: 4px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b88ab8;
  }
`;

const MainPage = () => {
  const [companies, setCompanies] = useState([]);
  const [displayedCompanies, setDisplayedCompanies] = useState([]);
  const [currentCompanies, setCurrentCompanies] = useState([]);

  const [isInitData, setIsInitData] = useState(false);
  const [isFullData, setIsFullData] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  //   default items per page = 15
  const [itemsPerPage, setItemsPerPage] = useState(15);

  //   get first and last number of pages for pagination purposes
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  //   sort data by id by default
  const [sortType, setSortType] = useState('id');

  const applyDataToCompanies = (data) => {
    setCurrentCompanies(data.slice(firstItemIndex, lastItemIndex));
    setDisplayedCompanies([...displayedCompanies, ...data]);
    setCompanies([...companies, ...data]);
  };

  const getCompaniesInitData = async () => {
    let response = await axios.get(
      'https://recruitment.hal.skygate.io/companies'
    );
    return sortASC(response.data, 'id');
  };

  //   get the remaining data (incomes) to the initially fetched data
  const getCompaniesFullData = async (arr, initial = false) => {
    if (initial) {
      arr = arr.slice(0, itemsPerPage);
    } else {
      arr = arr.slice(itemsPerPage, arr.length);
    }

    let lastMonth = getLastMonth();
    const companiesData = arr.map(async (company) => {
      const response = await axios.get(
        `https://recruitment.hal.skygate.io/incomes/${company.id}`
      );
      const incomesArr = response.data.incomes;

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
    return await Promise.all(companiesData);
  };

  const handleSortTypeChange = (userSortType) => {
    if (userSortType === sortType) {
      setDisplayedCompanies([...displayedCompanies].reverse());
    } else {
      const sortedCompanies = [...sortASC(displayedCompanies, userSortType)];
      setDisplayedCompanies(sortedCompanies);
      setSortType(userSortType);
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    //   fetch initial data on page load
    (async () => {
      let data = await getCompaniesInitData();
      let completeData = await getCompaniesFullData(data, true);
      setCompanies([...companies, ...completeData]);
      applyDataToCompanies(completeData);
      setIsInitData(true);
    })();
  }, []);

  useEffect(() => {
    // get the right amount of data to fill the table
    setCurrentCompanies(
      displayedCompanies.slice(firstItemIndex, lastItemIndex)
    );
  }, [
    itemsPerPage,
    currentPage,
    displayedCompanies,
    firstItemIndex,
    lastItemIndex,
  ]);

  //   if initial data is loaded go fetch the full data and fill up the table
  if (isInitData) {
    (async () => {
      let data = await getCompaniesInitData();
      let fullData = await getCompaniesFullData(data);
      setIsInitData(false);
      setIsFullData(true);
      applyDataToCompanies(fullData);
    })();
  }

  //   change number of companies displayed on a single page
  const handleNumOfItems = (num) => {
    setItemsPerPage(num);
    setCurrentPage(1);
  };

  return (
    <PageWrapper>
      <ContentContainer>
        <Header content="Recruitment Task" />
        <Menu
          handleNumOfItems={handleNumOfItems}
          isFullData={isFullData}
          itemsPerPage={itemsPerPage}
        />
        <TableContainer>
          <Table
            itemsPerPage={itemsPerPage}
            companies={companies}
            handleSortTypeChange={handleSortTypeChange}
            sortType={sortType}
            isInitData={isInitData}
            isFullData={isFullData}
            currentCompanies={currentCompanies}
          />
        </TableContainer>
        <Footer
          itemsPerPage={itemsPerPage}
          itemsCount={displayedCompanies.length}
          setCurrentPage={(e) => setCurrentPage(Number(e.target.value))}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          firstItemIndex={firstItemIndex}
          lastItemIndex={lastItemIndex}
        />
      </ContentContainer>
    </PageWrapper>
  );
};

export default MainPage;
