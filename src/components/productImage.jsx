import styled from "styled-components";
import phone from "../assets/acer-phone.jpg";

const ProductImgContainer = styled.div`
  height: 400px;
  max-width: 350px;
`;

const ProductImg = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 20%;
`;

export const ProductImage = () => {
  return (
    <>
      <ProductImgContainer>
        <ProductImg
          src={phone}
          alt="Photo of smartphone"
          title="Photo of smartphone"
        />
      </ProductImgContainer>
    </>
  );
};
