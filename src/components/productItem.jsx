import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Brand = styled.h2`
  font-size: 2.2rem;
  color: #323232;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.2rem;
  background-color: #c5c5c5;
  border-radius: 3rem;
  transition: all 0.3s;

  &:hover {
    background-color: #323232;
    color: #c5c5c5;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 1rem;

  &:hover {
    border: 0.1rem solid #c5c5c5;
    border-radius: 10%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`;

const Price = styled.h3`
  font-size: 1.8rem;
  color: #242424;
  text-transform: uppercase;
  text-align: center;
`;

export const ProductItem = ({ item }) => {
  return (
    <>
      <Link to={`/item/${item.id}`}>
        <article>
          <Brand>
            {item.brand} - {item.model}
          </Brand>
          <div>
            <Image src="../src/assets/acer-phone.jpg" alt="Acer smartphone" />
          </div>
          <Price>Price {item.price}€</Price>
        </article>
      </Link>
    </>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
