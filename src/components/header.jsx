import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  background-color: #cbcbe5;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #213746;
  padding: 2.8rem;
  letter-spacing: 0.2rem;
  background-color: #f2f2f2;
  border-radius: 10rem;
  margin-left: 15rem;
`;

const CartContainer = styled.div`
  display: flex;
`;

const Cart = styled.p`
  font-size: 2rem;
  color: #213746;
  background-color: #ebebeb;
  width: 3.5rem;
  text-align: center;
  border-radius: 5rem;
`;

const Breadcrumbs = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: #213746;
`;

const CartIcon = styled.i`
  font-size: 3rem;
  color: #213746;
  margin-right: 10rem;
`;

export const Header = (props) => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Title>TechTrove</Title>
      </StyledLink>
      <Breadcrumbs>{props.currentPage}</Breadcrumbs>
      <CartContainer>
        <Cart>{props.cartItems.length}</Cart>
        <CartIcon className="fa-solid fa-cart-shopping"></CartIcon>
      </CartContainer>
    </HeaderContainer>
  );
};
