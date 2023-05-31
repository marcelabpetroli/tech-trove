import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 10rem;
  background-color: #cbcbe5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: rgb(42, 42, 42);
  padding: 2.8rem;
  letter-spacing: 0.2rem;
  background-color: #f2f2f2;
  border-radius: 40%;
`;

const Breadcrumbs = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: #213746;
`;

export const Header = (props) => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Title>TechTrove</Title>
      </StyledLink>
      <Breadcrumbs>{props.currentPage}</Breadcrumbs>
    </HeaderContainer>
  );
};
