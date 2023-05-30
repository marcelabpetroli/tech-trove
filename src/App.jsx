import "./styles/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
