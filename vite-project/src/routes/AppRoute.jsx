import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "@/components/Header/Nav";
import Footer from "@/components/footer/Footer";

import Home from "@/pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import ProfilePage from "@/pages/ProfilePage";

import { fetchProducts } from "@/Redux/middleware/api";

import "@/App.css";

const PrivateRoute = ({ user }) => {
  if (user) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

const ProfileRoute = ({ user }) => {
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

function AppRoute() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRoute user={user} />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<ProfileRoute user={user} />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
       <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
