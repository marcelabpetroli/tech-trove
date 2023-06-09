import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/App.css";
/* Components */
import { Header } from "./components/header";
import { Search } from "./components/search";
import { ProductsList } from "./components/productsList";
import { ProductDetail } from "./components/productDetail";
/* Fixtures */
import detailData from "./fixtures/single-product.json";
/* Use cases */
import { FilterProducts } from "./usecases/filter-products.usecase";
/* Custom Hooks */
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useFetchProducts } from "./hooks/useFetchProducts";

function App() {
  const products = useFetchProducts();
  const [search, setSearch] = useState("");
  const [productDetail, setProductDetail] = useState(detailData);
  const [currentPage, setCurrentPage] = useState("Home");
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const productsFiltered = FilterProducts.execute(products, search);

  const handleFilterModelOrBrand = (value) => {
    setSearch(value);
  };

  const selectedProduct = (id) => {
    return products.find((prod) => prod.id === id);
  };

  const updateCurrentPage = (value) => {
    setCurrentPage(value);
  };

  const handleAddToCart = (id) => {
    const updatedCartItems = [...cartItems, id];
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <HashRouter>
        <Header
          currentPage={currentPage}
          cartItems={cartItems}
          updateCurrentPage={updateCurrentPage}
        />

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
                handleAddToCart={handleAddToCart}
              />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
