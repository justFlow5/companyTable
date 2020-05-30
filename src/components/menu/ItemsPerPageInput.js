import React from 'react';
import styled from 'styled-components';
import { device } from '../../media/mediaQuery';

const InputContainer = styled.div`
  position: relative;
  padding-left: 20px;
  display: inline-block;

  & > label {
    font-size: 19px;
    color: white;
    display: inline;
    padding: 0 6px;
    letter-spacing: 0.7px;
  }
`;

const SelectForm = ({ itemsPerPage, handleNumOfItems, isFullData }) => {
  // defaut options for a number of companies displayed on a page
  const numOfItems = [10, 15, 30, 50];
  return (
    <InputContainer>
      <label htmlFor={'itemsPerPage'}>Show</label>
      <select
        id="itemsPerPage"
        name="itemsPerPage"
        defaultValue={itemsPerPage}
        onChange={(e) => handleNumOfItems(e.target.value)}
        disabled={!isFullData}
      >
        {numOfItems.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <label htmlFor={'itemsPerPage'}>entries</label>
    </InputContainer>
  );
};

export default SelectForm;
