import "./styles/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Products } from "./components/products";
import { useState } from "react";
import data from "./fixtures/products.json";

function App() {
  const [products, setProducts] = useState(data);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Search />
                <Products products={products} setProducts={setProducts} />
              </>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
