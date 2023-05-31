import "./styles/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { ProductsList } from "./components/productsList";
import { useState } from "react";
import data from "./fixtures/products.json";

function App() {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");

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

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Search
                  search={search}
                  handleFilterModelOrBrand={handleFilterModelOrBrand}
                />
                <ProductsList products={productsFiltered} />
              </>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
