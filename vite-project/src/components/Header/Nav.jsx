import { useState } from "react";
import Cart from "../Cart/Cart";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unSetUser } from "@/Redux/Slice/userSlice";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-toastify";
import UserMenu from "@/components/user/UserMenu";

const Nav = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/#" },
    { name: "Products", link: "/#" },
    { name: "About", link: "/#" },
    { name: "Contact", link: "/#" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const data = await supabase.auth.signOut();
    if (data.error) {
      toast.error(error.message);
      return;
    }
    dispatch(unSetUser());
    toast.success("Logout successful");
    // navigate("/");
  };

  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0  z-10">
        <div className="md:flex items-center justify-between  bg-[#fff] pl-2 md:pl-7 px-7 ">
          <div className="font-bold p-3 flex items-center font-[Poppins] text-[#030303] sm:w-screen text-4xl lg:text-4xl ">
            <h1 className="cursor-pointer">ECS</h1>
          </div>
          <div className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
                onClick={() => setOpen(!open)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
                onClick={() => setOpen(!open)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent sm:bg-[#e9eff7] xs:bg-[#e9eff7] md:bg-transparent md:z-auto z-[-1] left-0 w-full  sm:w-screen md:w-auto md:pl-0 xl:mr pl-9 pr-9 transition-all duration-500 ease-out ${
              open ? "top-10" : "top-[-490px]"
            }`}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="text-[#000000] md:ml-8 text-x1 md:my-0 my-7 flex items-center justify-center sm:text-2xl xs:text-2xl  "
              >
                <a
                  href={link.link}
                  className="px-4 py-2 border-b-4 border-transparent hover:border-[#f48c06] duration-50  ease-linear sm:items-center "
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li  className="px-4 py-2 border-b-4 border-transparent hover:border-[#f48c06] duration-50  ease-linear sm:items-center ">
              <UserMenu />
            </li>

            <li  className="px-4 py-2 border-b-4 border-transparent hover:border-[#f48c06] duration-50  ease-linear sm:items-center ">
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
