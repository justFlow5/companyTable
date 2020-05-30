import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { device } from '../../../media/mediaQuery';

const fadeIn = keyframes`
0% {
  transform: scale(1);
  }

  100% {
    transform: scale(1.15);
  }
`;

const PaginationInfo = styled.h3`
  font-size: 18px;
  letter-spacing: 0.8px;
  color: white;
  @media ${device.tablet} {
    margin-left: 20px;
  }
`;

const ListOfNumbers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @media ${device.tablet} {
    margin-right: 15px;
  }
`;
const NumberItem = styled.li`
  background: #a01ca0;
  margin: 1px;

  border-radius: 4px;
  text-align: center;
  transform: scale(1);

  padding: 7px 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  @media ${device.mobileL} {
    font-size: 18px;
  }

  &.tail {
    padding: 7px 5px;
    font-weight: 700;
    font-size: 21px;

    @media ${device.mobileL} {
      padding: 10px 12px;
    }
  }

  @media ${device.mobileL} {
    padding: 7px 12px;
  }

  @media ${device.tablet} {
    padding: 10px;
    padding: 0;
    width: 30px;
    height: 35px;
  }

  &:hover {
    background-color: #c155dc;
  }

  &.devider {
    color: white;
    padding: 7px 5px;

    &:hover {
      background-color: #a01ca0;
    }
  }
  &.current {
    border: 1px solid #4f004f;
    background-color: #c155dc;
    color: white;
    transform: scale(1);
    margin: 1px 5px;
    /* transition: all 0.5s ease-in-out; */
    animation: ${fadeIn} 0.2s ease-in-out 0.00001s forwards;
  }
`;

const Pagination = ({
  itemsCount,
  setCurrentPage,
  currentPage,
  itemsPerPage,
  firstItemIndex,
  lastItemIndex,
  tableElem,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemsCount / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const firstItem = pageNumbers[0];
  const lastItem = pageNumbers[pageNumbers.length - 1];
  const onLastPage = currentPage === lastItem;

  const divider = <NumberItem className="devider">...</NumberItem>;

  const numberOfResults = () => {
    return itemsCount === 0 ? (
      <PaginationInfo>No results found</PaginationInfo>
    ) : (
      <PaginationInfo>{`Showing ${firstItemIndex + 1}-${
        onLastPage ? itemsCount : lastItemIndex
      } of ${itemsCount} results`}</PaginationInfo>
    );
  };

  const PageNumber = ({ num }) => {
    const current = num === currentPage;
    return (
      <NumberItem
        className={current ? 'current' : null}
        value={num}
        onClick={(e) => {
          setCurrentPage(e);
          tableElem.scrollTo(0, 0);
        }}
      >
        {num}
      </NumberItem>
    );
  };

  const renderPageNumbers = () => {
    if (pageNumbers.length <= 6) {
      return pageNumbers.map((num) => <PageNumber key={num} num={num} />);
    }
    if (currentPage <= 4) {
      const right = <PageNumber num={lastItem} />;
      const left = pageNumbers.slice(0, 6).map((num) => {
        return <PageNumber key={num} num={num} />;
      });
      return (
        <>
          {left}
          {divider}
          {right}
        </>
      );
    } else if (currentPage >= 5 && currentPage <= pageNumbers.length - 4) {
      const left = <PageNumber num={firstItem} />;
      const right = <PageNumber num={lastItem} />;
      const between = pageNumbers
        .slice(currentPage - 2, currentPage + 1)
        .map((num) => {
          return <PageNumber key={num} num={num} />;
        });

      return (
        <>
          {left}
          {divider}
          {between}
          {divider}
          {right}
        </>
      );
    } else if (currentPage >= pageNumbers.length - 3) {
      const left = <PageNumber num={firstItem} />;
      const right = pageNumbers.slice(-6).map((num) => {
        return <PageNumber key={num} num={num} />;
      });
      return (
        <>
          {left}
          {divider}
          {right}
        </>
      );
    }
  };
  useEffect(() => {
    if (itemsCount > itemsPerPage) {
      setIsLoading(false);
    }
  }, [itemsCount, itemsPerPage]);

  return (
    <>
      {isLoading ? (
        <PaginationInfo>Loading...</PaginationInfo>
      ) : (
        <>
          {numberOfResults()}
          {itemsCount > 0 && (
            <ListOfNumbers>
              <NumberItem
                value={currentPage - 1}
                onClick={currentPage !== firstItem ? setCurrentPage : undefined}
                className="tail"
              >
                {'<'}
              </NumberItem>
              {renderPageNumbers()}
              <NumberItem
                value={currentPage + 1}
                onClick={currentPage !== lastItem ? setCurrentPage : undefined}
                className="tail"
              >
                {'>'}
              </NumberItem>
            </ListOfNumbers>
          )}
        </>
      )}
    </>
  );
};

export default Pagination;
