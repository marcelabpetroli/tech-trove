import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import phone from "../assets/acer-phone.jpg";
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
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

const Info = styled.div`
  margin-top: 1rem;
`;

const Brand = styled.h2`
  font-size: 2.2rem;
  color: #323232;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  transition: all 0.3s;
`;

const Model = styled.p`
  font-size: 1.8rem;
  color: #323232;
`;

const Price = styled.p`
  font-size: 1.8rem;
  color: #323232;
  margin-top: 0.5rem;
`;

export const ProductItem = ({ item, updateCurrentPage }) => {
  const handleClick = () => {
    updateCurrentPage(item.model);
  };

  return (
    <Link to={`/item/${item.id}`} onClick={handleClick}>
      <Card>
        <Image src={phone} alt="Acer smartphone" />
        <Info>
          <Brand>{item.brand}</Brand>
          <Model>Model: {item.model}</Model>
          <Price>Price: {item.price}€</Price>
        </Info>
      </Card>
    </Link>
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
