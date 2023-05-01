import { useState } from "react";
import "./Cart.css";
import { FaCartArrowDown, FaWindowClose } from "react-icons/fa";

// FaCartArrowDown

function Cart() {
  const [showMenu, setShowMenu] = useState(false);
  const products = [
    {
      id: 1,
      name: "Cheeseburger",
      price: 9.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className={`hamburger-menu ${showMenu ? "show" : ""}`}>
        <h1 className="title">Shopping Cart</h1>
        {products.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <div className="item-details">
              <p className="item-name">{product.name}</p>
              <p className="item-price">${product.price}</p>
            </div>
          </div>
        ))}
        <div>
          <p className="total">Total: $9.99</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
      <button className="cart-button" onClick={toggleMenu}>
        {!showMenu ? (
          <FaCartArrowDown className="icon" />
        ) : (
          <FaWindowClose className="icon" />
        )}
      </button>
    </div>
  );
}

export default Cart;

{
  /* <div className="cart">

        {products.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <div className="item-details">
              <p className="item-name">{product.name}</p>
              <p className="item-price">${product.price}</p>
            </div>
          </div>
        ))}
        <div>
          <p className="total">Total: $9.99</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div> */
}
