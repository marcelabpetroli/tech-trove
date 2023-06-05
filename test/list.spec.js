import React from "react";
import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";
import { ProductsList } from "../src/components/productsList";
import data from "../src/fixtures/products.json";

const renderWithRouter = (products, updateCurrentPage) => {
  render(
    <HashRouter>
      <ProductsList products={products} updateCurrentPage={updateCurrentPage} />
    </HashRouter>
  );
};

describe("Product list component specs", () => {
  it("should render a list of products", () => {
    const products = data;
    const updateCurrentPage = () => {};

    renderWithRouter(products, updateCurrentPage);

    const productsLength = products.length;

    const list = screen.getAllByRole("listitem");

    expect(list).toHaveLength(productsLength);
  });
});
