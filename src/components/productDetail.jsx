import React from "react";
import { Link, useParams } from "react-router-dom";
import { PageNotFound } from "./pageNotFound";
import styled from "styled-components";
import { ProductImage } from "./productImage";
import { ProductDescription } from "./productDescription";
import { ProductActions } from "./productActions";

const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
  height: 80vh;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15rem;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 3rem;
  color: #274b5c;
  background-color: #c8d4e3;
  padding: 2rem;
  border-radius: 5rem;
  transition: all 0.3s;

  &:hover {
    color: #c8d4e3;
    background-color: #274b5c;
  }
`;

export const ProductDetail = (props) => {
  const params = useParams();
  const productSelected = props.selectedProduct(params.id);
  const handleClick = () => {
    props.updateCurrentPage("Home");
  };

  const renderDetails = () => {
    if (productSelected !== undefined) {
      return (
        <DetailsSection>
          <DetailsContent>
            <ProductImage />
            <div>
              <ProductDescription
                productDetail={props.productDetail}
                productSelected={productSelected}
              />
              <ProductActions
                productDetail={props.productDetail}
                handleAddToCart={props.handleAddToCart}
              />
            </div>
          </DetailsContent>

          <StyledLink to="/" onClick={handleClick}>
            Go back
          </StyledLink>
        </DetailsSection>
      );
    } else {
      return <PageNotFound updateCurrentPage={props.updateCurrentPage} />;
    }
  };

  return <>{renderDetails()}</>;
};
