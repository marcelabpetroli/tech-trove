import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 10rem;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 4rem;
  padding-right: 2rem;
  color: #323232;
`;

const Input = styled.input`
  border: none;
  border-radius: 0.3rem;
  font-size: 1.8rem;
  padding: 1rem;
  height: 6rem;
  width: 30rem;
  background-color: white;
`;

export const Search = (props) => {
  const handleInput = (e) => {
    props.handleFilterModelOrBrand(e.target.value);
  };
  return (
    <Form>
      <Label htmlFor="search">Search:</Label>
      <Input
        type="text"
        name="search"
        id="search"
        placeholder="Ex: Acer or Liquid Jade Z"
        onInput={handleInput}
        value={props.search}
      />
    </Form>
  );
};
