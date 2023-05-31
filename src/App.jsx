import "./styles/App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { ProductsList } from "./components/productsList";
import { ProductDetail } from "./components/productDetail";
import data from "./fixtures/products.json";
import detailData from "./fixtures/single-product.json";

function App() {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");
  const [productDetail, setProductDetail] = useState(detailData);
  const [currentPage, setCurrentPage] = useState("HOME");

  const productsFiltered = products
    .filter(
      (prod) =>
        prod.brand.toLowerCase().includes(search.toLowerCase()) ||
        prod.model.toLowerCase().includes(search.toLowerCase())
    )
    .sort(function (a, b) {
      return a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model);
    });

  const handleFilterModelOrBrand = (value) => {
    setSearch(value);
  };

  const selectedProduct = (id) => {
    return products.find((prod) => prod.id === id);
  };

  const updateCurrentPage = (value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <HashRouter>
        <Header currentPage={currentPage} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search
                  search={search}
                  handleFilterModelOrBrand={handleFilterModelOrBrand}
                />
                <ProductsList
                  products={productsFiltered}
                  updateCurrentPage={updateCurrentPage}
                />
              </>
            }
          />

          <Route
            path="/item/:id"
            element={
              <ProductDetail
                productDetail={productDetail}
                selectedProduct={selectedProduct}
                updateCurrentPage={updateCurrentPage}
              />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
