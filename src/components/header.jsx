import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  background-color: #cbcbe5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: #213746;
  padding: 2.8rem;
  letter-spacing: 0.2rem;
  background-color: #f2f2f2;
  border-radius: 10rem;
  margin-left: 15rem;
`;

const Breadcrumbs = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: #213746;
`;

const CartIcon = styled.i`
  font-size: 4rem;
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
      <CartIcon className="fa-solid fa-cart-shopping"></CartIcon>
    </HeaderContainer>
  );
};
