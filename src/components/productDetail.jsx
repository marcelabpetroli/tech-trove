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
  height: 100vh;
  background-color: #ededed;
`;

const DetailsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15rem;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 500;
  margin-top: 3rem;
  color: #274b5c;
  background-color: #c8d4e3;
  padding: 2rem;
  border-radius: 5rem;

  &:hover {
    color: #c8d4e3;
    background-color: #274b5c;
  }
`;

export const ProductDetail = (props) => {
  const params = useParams();
  const productSelected = props.selectedProduct(params.id);
  const handleClick = () => {
    props.updateCurrentPage("HOME");
  };

  const renderDetails = () => {
    if (productSelected !== undefined) {
      return (
        <DetailsSection>
          <DetailsContent>
            <ProductImage />
            <ProductDescription
              productDetail={props.productDetail}
              productSelected={productSelected}
            />
            <ProductActions productDetail={props.productDetail} />
          </DetailsContent>

          <StyledLink to="/" onClick={handleClick}>
            Go back
          </StyledLink>
        </DetailsSection>
      );
    } else {
      return <PageNotFound />;
    }
  };

  return <>{renderDetails()}</>;
};
