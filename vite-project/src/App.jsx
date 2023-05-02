import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Header/Nav";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/Redux/middleware/api";
import Home from "./pages/Home";
import Footer from "@/components/footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
