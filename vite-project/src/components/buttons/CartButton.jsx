import React from "react";
import "./CartButtonStyle.css";

function CartButton({ children }) {
  return (
    <>
      <button className="button-36">{children}</button>
    </>
  );
}

export default CartButton;
