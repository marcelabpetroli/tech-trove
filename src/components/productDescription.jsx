import React from "react";
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
          <Item aria-label="Brand">Brand: {props.productDetail.brand}</Item>
          <Item aria-label="Model">Model: {props.productDetail.model}</Item>
          <Item aria-label="Price">Price: {props.productDetail.price}</Item>
          <Item aria-label="CPU">CPU: {props.productDetail.cpu}</Item>
          <Item aria-label="RAM">RAM: {props.productDetail.ram}</Item>
          <Item aria-label="OS">
            Operating System: {props.productDetail.os}
          </Item>
          <Item aria-label="Display">
            Display Resolution: {props.productDetail.displayResolution}
          </Item>
          <Item aria-label="Battery">
            Battery: {props.productDetail.battery}
          </Item>
          <Item aria-label="Camera">
            Camera: {props.productDetail.primaryCamera}
          </Item>
          <Item aria-label="Dimentions">
            Dimentions: {props.productDetail.dimentions}
          </Item>
          <Item aria-label="Weight">
            Weight: {props.productDetail.weight} g
          </Item>
        </ul>
      </Article>
    </>
  );
};
