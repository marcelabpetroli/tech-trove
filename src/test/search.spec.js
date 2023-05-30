import React from "react";
import { render, screen } from "@testing-library/react";
import { Search } from "../components/search.jsx";
import "@testing-library/jest-dom/extend-expect";

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
});
