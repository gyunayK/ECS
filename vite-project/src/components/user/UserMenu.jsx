import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unSetUser } from "@/Redux/Slice/userSlice";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-toastify";

import "./UserMenuStyle.css";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  return (
    <div>
      <div className="user-menu__icon" onClick={handleMenuToggle}>
        {isMenuOpen ? <FaTimes /> : <FaUser />}
      </div>
      <div className={`user-menu ${isMenuOpen ? "show" : ""}`}>
        <ul className={`user-menu__list `}>
          <li className="user-menu__item">
            <Link
              to={user ? "/profileUpdate" : "/login"}
              className="user-menu__link"
            >
              Profile
            </Link>
          </li>
          <li className="user-menu__item">
            <Link
              to={user ? "/userUpdate" : "/login"}
              className="user-menu__link"
            >
              Change Password
            </Link>
          </li>
          <li className="user-menu__item">
            <Link
              to={!user ? "/login" : ""}
              className="user-menu__link"
              onClick={!user ? "" : () => handleLogout()}
            >
              {user ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserMenu;
