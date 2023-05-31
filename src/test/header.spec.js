import React from "react";
import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../components/header";
import { HashRouter } from "react-router-dom";

const renderWithRouter = (currentPage, cartItems) => {
  render(
    <HashRouter>
      <Header currentPage={currentPage} cartItems={cartItems} />
    </HashRouter>
  );
};

describe("Header component specs", () => {
  it("should find the title", () => {
    renderWithRouter(2, []);

    const element = screen.getByRole("heading", { name: "TechTrove" });

    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("H1");
  });
});
