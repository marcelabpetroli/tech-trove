import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
`;

const Item = styled.li`
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

export const ProductDescription = (props) => {
  return (
    <>
      <Article>
        <Title>Description</Title>
        <ul>
          <Item>Brand: {props.productDetail.brand}</Item>
          <Item>Model: {props.productDetail.model}</Item>
          <Item>Price: {props.productDetail.price}</Item>
          <Item>CPU: {props.productDetail.cpu}</Item>
          <Item>RAM: {props.productDetail.ram}</Item>
          <Item>Operating System: {props.productDetail.os}</Item>
          <Item>
            Display Resolution: {props.productDetail.displayResolution}
          </Item>
          <Item>Battery: {props.productDetail.battery}</Item>
          <Item>Camera: {props.productDetail.primaryCamera}</Item>
          <Item>Dimentions: {props.productDetail.dimentions}</Item>
          <Item>Weight: {props.productDetail.weight} g</Item>
        </ul>
      </Article>
    </>
  );
};
