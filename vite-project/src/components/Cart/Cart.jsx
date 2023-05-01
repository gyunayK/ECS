import { useState } from "react";
import "./Cart.css";
import { FaCartArrowDown, FaWindowClose, FaTrash } from "react-icons/fa";
import CartButton from "@/components/buttons/CartButton";
import { useSelector } from "react-redux";

// FaCartArrowDown

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const [showMenu, setShowMenu] = useState(false);
  const products = [
    {
      id: 1,
      name: "Cheeseburger",
      price: 9.99,
      image: "https://via.placeholder.com/150",
    },
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
      <div className="hamburger-menu-wrapper  ">
        <div
          className={`hamburger-menu ${
            showMenu ? "show" : ""
          } sm:mt-14 md:mt-0`}
        >
          <div className="cart-header-wrapper m-5">
            <h1 className="title">Shopping Cart</h1>
          </div>
          <div className="cart-item-wrapper">
            {cart.cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image} alt={product.name} />

                <button className="remove-button">
                  <FaTrash />
                </button>

                <div className="item-details">
                  <p className="item-name">
                    {product.name.length > 10
                      ? product.name.substring(0, 10) + "..."
                      : product.name}
                  </p>
                  <p className="item-price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="m-20 bottom-Wrapper">
            <p className="total">${cart.total.price}</p>
            <CartButton>Check out</CartButton>
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
