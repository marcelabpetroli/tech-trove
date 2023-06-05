import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  background-color: #cbd8e9;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #213746;
  transition: all 0.3s;

  &:hover {
    color: grey;
  }
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

const ArrowIcon = styled.i`
  font-size: 3rem;
  color: #7198cb;
  margin: 0 0.5rem;
  padding: 1rem;
`;

export const Header = (props) => {
  const handleClick = () => {
    props.updateCurrentPage("Home");
  };

  return (
    <HeaderContainer>
      <StyledLink to="/" onClick={handleClick}>
        <Title>TechTrove</Title>
      </StyledLink>
      <Breadcrumbs>
        <StyledLink to="/" onClick={handleClick}>
          Home
        </StyledLink>
        {props.currentPage === "Home" ? (
          ""
        ) : (
          <>
            <ArrowIcon className="fa-solid fa-angle-right" />
            {props.currentPage}
          </>
        )}
      </Breadcrumbs>
      <CartContainer>
        <Cart aria-label="cart">
          {props.cartItems && props.cartItems.length === 0
            ? ""
            : props.cartItems.length}
        </Cart>
        <CartIcon className="fa-solid fa-cart-shopping"></CartIcon>
      </CartContainer>
    </HeaderContainer>
  );
};
