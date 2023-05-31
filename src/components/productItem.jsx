import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import phone from "../assets/acer-phone.jpg";
import styled from "styled-components";

const Brand = styled.h2`
  font-size: 2.2rem;
  color: #323232;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.2rem;
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
  border-radius: 20%;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`;

const Price = styled.p`
  font-size: 1.8rem;
  color: #323232;
  text-transform: uppercase;
  text-align: center;
`;

export const ProductItem = ({ item, updateCurrentPage }) => {
  const handleClick = () => {
    updateCurrentPage(item.model);
  };

  return (
    <>
      <Link to={`/item/${item.id}`} onClick={handleClick}>
        <article>
          <Brand>
            {item.brand} - {item.model}
          </Brand>
          <div>
            <Image src={phone} alt="Acer smartphone" />
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
