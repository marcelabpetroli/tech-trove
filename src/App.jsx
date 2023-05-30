import "./styles/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Search } from "./components/search";

function App() {
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
              </>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
