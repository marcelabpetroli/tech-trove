import React from "react";
import styled from "styled-components";

const ActionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const ActionsDiv = styled.div`
  display: flex;
  gap: 2rem;
`;

const Select = styled.select`
  border: none;
  background-color: #c8d4e3;
  font-family: "Oswald", sans-serif;
  transition: all 0.3s;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

const Option = styled.option`
  font-family: "Oswald", sans-serif;
  font-weight: 300;
`;

const Button = styled.option`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 500;
  margin-top: 3rem;
  color: #c8d4e3;
  background-color: #274b5c;
  padding: 1rem;
  border-radius: 10rem;
  width: 10rem;
  text-align: center;
  align-self: flex-end;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #274b5c;
    background-color: #c8d4e3;
  }
`;

export const ProductActions = (props) => {
  const handleClickAdd = () => {
    props.handleAddToCart(props.productDetail.id);
  };

  const colorOptions = props.productDetail.options.colors.map((color) => (
    <Option key={color.code} value={color.name}>
      {color.name}
    </Option>
  ));

  const storageOptions = props.productDetail.options.storages.map((storage) => (
    <Option key={storage.code} value={storage.name}>
      {storage.name}
    </Option>
  ));

  return (
    <>
      <ActionsContainer>
        <ActionsDiv>
          <Select value="blue">
            <Option value="">Select Color</Option>
            {colorOptions}
          </Select>

          <Select value="512 MB">
            <Option value="">Select Storage</Option>
            {storageOptions}
          </Select>
        </ActionsDiv>

        <Button onClick={handleClickAdd}>Add</Button>
      </ActionsContainer>
    </>
  );
};
