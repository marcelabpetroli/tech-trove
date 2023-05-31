import React from "react";
import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";
import { ProductDetail } from "../components/productDetail";
import detailData from "../fixtures/single-product.json";

const renderWithRouter = (productDetail, selectedProduct) => {
  render(
    <HashRouter>
      <ProductDetail
        productDetail={productDetail}
        selectedProduct={selectedProduct}
      />
    </HashRouter>
  );
};

describe("Product detail component specs", () => {
  it("should render the detail of the product", () => {
    renderWithRouter(detailData, (_) => {
      return detailData;
    });

    const brand = screen.getByRole("listitem", { name: /brand/i });
    const model = screen.getByRole("listitem", { name: /model/i });
    const price = screen.getByRole("listitem", { name: /price/i });
    const cpu = screen.getByRole("listitem", { name: /cpu/i });
    const ram = screen.getByRole("listitem", { name: /ram/i });
    const os = screen.getByRole("listitem", { name: /os/i });
    const display = screen.getByRole("listitem", { name: /display/i });
    const battery = screen.getByRole("listitem", { name: /battery/i });
    const camera = screen.getByRole("listitem", { name: /camera/i });
    const dimentions = screen.getByRole("listitem", { name: /dimentions/i });
    const weight = screen.getByRole("listitem", { name: /weight/i });

    expect(brand).toBeInTheDocument();
    expect(model).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(cpu).toBeInTheDocument();
    expect(ram).toBeInTheDocument();
    expect(os).toBeInTheDocument();
    expect(display).toBeInTheDocument();
    expect(battery).toBeInTheDocument();
    expect(camera).toBeInTheDocument();
    expect(dimentions).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
  });
});
