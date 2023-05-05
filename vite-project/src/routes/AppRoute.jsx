import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Nav from "@/components/Header/Nav";
import Footer from "@/components/footer/Footer";

import Home from "@/pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import UserData from "../components/userData/userData";


import { fetchProducts } from "@/Redux/middleware/api";

import "@/App.css";

function AppRoute() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const shouldShowFooter = !["/Login", "/Register"].includes(location.pathname);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserData/>} />
        </Routes>
        {shouldShowFooter && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
