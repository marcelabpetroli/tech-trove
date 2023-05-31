import { Link } from "react-router-dom";
import pageNotFound from "../assets/page-not-found.png";
import styled from "styled-components";

const NotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #8fabb3;
`;

const NotFoundImage = styled.img`
  border-radius: 30rem;
`;

const NotFoundParagraph = styled.p`
  font-size: 3rem;
  margin-top: 10rem;
  color: #274b5c;
  font-weight: 700;

  &:hover {
    color: #12242c;
  }
`;

export const PageNotFound = () => {
  return (
    <NotFoundSection>
      <NotFoundImage
        src={pageNotFound}
        alt="Page not found"
        title="Page not found"
      />

      <Link to={"/"}>
        <NotFoundParagraph>Go back to main page</NotFoundParagraph>
      </Link>
    </NotFoundSection>
  );
};
