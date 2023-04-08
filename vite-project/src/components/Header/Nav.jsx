import Nav_button from "../buttons/Nav_button";
import icon from "../../assets/IMG/Patek-Philippe-Logo.png";
import { useState } from "react";

const Nav = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Products", link: "/products" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0  z-10">
        <div className="md:flex items-center justify-between  bg-[#2a9d8f] pl-2 md:pl-7 px-7 ">
          <div className="font-bold p-3 flex items-center font-[Poppins] text-[#e9c46a] sm:w-screen text-4xl lg:text-4xl ">
            <span className="text-3x1 mr-1 pt-2">
              <img
                src={icon}
                alt="Patek"
                className="lg:w-20 lg:h-20 md:block md:mr-10 md:min-h-11 md:min-w-11 lg:min-h-11 lg:min-w-11 sm:hidden cursor-pointer"
              />
            </span>
            <h1>Watches & Wonders</h1>
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
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent sm:bg-[#1a8b8f] md:bg-transparent md:z-auto z-[-1] left-0 w-full  sm:w-screen md:w-auto md:pl-0 pl-9 pr-9 transition-all duration-500 ease-out ${
              open ? "top-10" : "top-[-490px]"
            }`}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="text-[#e9c46a] md:ml-8 text-x1 md:my-0 my-7 flex items-center justify-center sm:text-2xl   "
              >
                <a
                  href={link.link}
                  className="px-4 py-2 border-b-4 border-transparent hover:border-indigo-400 duration-50  ease-linear sm:items-center "
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Nav_button>Button</Nav_button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
