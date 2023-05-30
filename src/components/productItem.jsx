import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Brand = styled.h2`
  font-size: 2.4rem;
  color: #242424;
  text-transform: uppercase;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
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
