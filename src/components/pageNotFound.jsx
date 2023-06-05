import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/page-not-found.png";
import styled from "styled-components";

const NotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`;

const NotFoundImage = styled.img`
  border-radius: 1rem;
  opacity: 0.8;
`;

const NotFoundParagraph = styled.p`
  font-size: 3rem;
  margin-top: 10rem;
  color: #274b5c;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    color: #4684a1;
  }
`;

export const PageNotFound = (props) => {
  const handleClick = () => {
    props.updateCurrentPage("Home");
  };

  return (
    <NotFoundSection>
      <NotFoundImage
        src={pageNotFound}
        alt="Page not found"
        title="Page not found"
      />

      <Link to={"/"}>
        <NotFoundParagraph onClick={handleClick}>
          Go back to main page
        </NotFoundParagraph>
      </Link>
    </NotFoundSection>
  );
};
