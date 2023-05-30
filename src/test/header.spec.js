import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/header.jsx";

describe("header spec", () => {
  it("should find the title", () => {
    render(<Header />);

    const element = screen.getByRole("heading", { name: "TechTrove" });

    expect(element.tagName).toEqual("H1");
  });
});
