// Components Import
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <main>
        <Navbar handleClick={handleClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
