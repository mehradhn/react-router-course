import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to={"/"}>
            #VanLife
          </Link>
          <nav>
            <Link to={"/about"}>About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
