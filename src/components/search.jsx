import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 10rem;
  background-color: #ebe7e7;
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
