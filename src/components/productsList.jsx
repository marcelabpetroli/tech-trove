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
`;

const ProductItemContainer = styled.li`
  width: calc(25% - 20px);
  margin: 10px;
  list-style: none;
`;

const NoResults = styled.p`
  width: 100vw;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
`;

export const ProductsList = (props) => {
  const renderResults = () => {
    if (props.products.length > 0) {
      return props.products.map((item) => {
        return (
          <ProductItemContainer key={item.id}>
            <ProductItem item={item} />
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
