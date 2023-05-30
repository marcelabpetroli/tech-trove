import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: rgb(203, 203, 229);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: rgb(42, 42, 42);
  padding: 0.2rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Title>TechTrove</Title>
      </StyledLink>
    </HeaderContainer>
  );
};
