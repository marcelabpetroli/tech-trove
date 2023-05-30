import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
  padding: 1rem;
  background-color: #ebe7e7;
`;

const Input = styled.input`
  border: none;
  border-radius: 0.1rem;
  font-weight: 400;
  padding: 0.1rem;
`;

export const Search = () => {
  return (
    <Form>
      <label htmlFor="search"></label>
      <Input
        type="text"
        name="search"
        id="search"
        placeholder="Ex: Acer or Liquid Jade Z"
      />
    </Form>
  );
};
