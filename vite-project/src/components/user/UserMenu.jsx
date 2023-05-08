import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./UserMenuStyle.css";

function UserMenu() {
  const user = useSelector((state) => state.user.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="user-menu__icon" onClick={handleMenuToggle}>
        {isMenuOpen ? <FaTimes /> : <FaUser />}
      </div>
      <div className={`user-menu ${isMenuOpen ? "show" : ""}`}>
        <ul className={`user-menu__list `}>
          <li className="user-menu__item">
            <a href="#" className="user-menu__link">
              Profile
            </a>
          </li>
          <li className="user-menu__item">
            <a href="#" className="user-menu__link">
              Change Password
            </a>
          </li>
          <li className="user-menu__item">
            <a href="#" className="user-menu__link">
              {user ? "Logout" : "Login"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserMenu;
