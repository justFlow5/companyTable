import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

const FilterInput = styled.input`
  width: 80px;
  height: 10px;
  padding: 6px 10px;
  border: 3px solid white;
  border-radius: 6px;
  font-size: 16px;
  margin-right: 20px;
  @media ${device.mobileL} {
    width: 115px;
  }

  @media ${device.tablet} {
    width: 130px;
  }
`;

const FilterBox = ({ companies, setDisplayedCompanies, setCurrentPage }) => {
  const [filter, setFilter] = useState('');

  const filterData = (userInput) =>
    companies.filter((company) => {
      let dataValues = Object.values(company);
      for (const value of dataValues) {
        if (value.toString().toLowerCase().includes(userInput)) {
          return company;
        }
      }
      return null;
    });

  useEffect(() => {
    if (filter.length >= 3) {
      setDisplayedCompanies(filterData(filter));
      setCurrentPage(1);
    } else {
      setDisplayedCompanies(companies);
    }
  }, [filter]);

  return (
    <FilterInput
      value={filter}
      type="text"
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default FilterBox;
