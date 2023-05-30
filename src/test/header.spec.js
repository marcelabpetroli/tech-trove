import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/header.jsx";
import { HashRouter } from "react-router-dom";

const renderWithRouter = () => {
  render(
    <HashRouter>
      <Header />
    </HashRouter>
  );
};
describe("header spec", () => {
  it("should find the title", () => {
    renderWithRouter(<Header />);

    const element = screen.getByRole("heading", { name: "TechTrove" });

    expect(element.tagName).toEqual("H1");
  });
});
