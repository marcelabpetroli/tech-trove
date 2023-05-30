import React from "react";
import PropTypes from "prop-types";
import { ProductItem } from "./productItem";
import styled from "styled-components";

const ResultsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5rem 15rem;
  row-gap: 5rem;
`;

const ProductItemContainer = styled.li`
  width: calc(25% - 20px);
  margin: 10px;
  list-style: none;
`;

export const Products = (props) => {
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
      return <p>There are no results that match your search. Try again :)</p>;
    }
  };

  return (
    <>
      <ResultsContainer>{renderResults()}</ResultsContainer>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
