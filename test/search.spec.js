import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "../src/components/search.jsx";
import "@testing-library/jest-dom/extend-expect";
import { FilterProducts } from "../src/usecases/filter-products.usecase.js";
import products from "../src/fixtures/products.json";

describe("Search component", () => {
  it("should render a search input", () => {
    render(<Search />);

    const inputElement = screen.getByRole("textbox");
    const inputPlaceholder = screen.getByPlaceholderText(
      "Ex: Acer or Liquid Jade Z"
    );

    expect(inputElement).toBeInTheDocument();
    expect(inputPlaceholder).toBeInTheDocument();
  });

  it("should write search query", () => {
    const query = "query";

    render(<Search />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: query } });

    expect(inputElement.value).toContain(query);
  });

  it("should get phones that match query", () => {
    const query = "liquid";
    const results = FilterProducts.execute(products, query);

    expect(results.length).toBe(47);
    expect(results[0].model).toBe("Liquid");
    expect(results[0].price).toBe("90");
    expect(results[1].model).toBe("Liquid C1");
    expect(results[1].price).toBe("180");
  });
});
