import React from "react";
import PropTypes from "prop-types";
import { ProductItem } from "./productItem";
import styled from "styled-components";

const ResultsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 5rem 15rem;
  row-gap: 5rem;

  @media (max-width: 1200px) {
    margin: 5rem 10rem;
  }

  @media (max-width: 900px) {
    margin: 5rem 5rem;
  }

  @media (max-width: 600px) {
    margin: 5rem 2rem;
  }
`;

const ProductItemContainer = styled.li`
  width: calc(25% - 20px);
  margin: 10px;
  list-style: none;

  @media (max-width: 1200px) {
    width: calc(33.33% - 20px);
  }

  @media (max-width: 900px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 600px) {
    width: calc(100% - 20px);
  }
`;

const NoResults = styled.p`
  width: 100vw;
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
`;

export const ProductsList = (props) => {
  const renderResults = () => {
    if (props.products.length > 0) {
      return props.products.map((item) => {
        return (
          <ProductItemContainer key={item.id}>
            <ProductItem
              item={item}
              updateCurrentPage={props.updateCurrentPage}
            />
          </ProductItemContainer>
        );
      });
    } else {
      return (
        <NoResults>
          There are no results that match your search. Try again :)
        </NoResults>
      );
    }
  };

  return (
    <>
      <ResultsContainer>{renderResults()}</ResultsContainer>
    </>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
