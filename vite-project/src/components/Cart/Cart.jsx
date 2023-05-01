import { useState } from "react";
import "./Cart.css";
import { FaCartArrowDown, FaWindowClose, FaTrash } from "react-icons/fa";
import CartButton from "@/components/buttons/CartButton";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/Redux/Slice/cartSlice";

// FaCartArrowDown

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleRemoveItem = (id, price, quantity) => {
    dispatch(removeFromCart({ id, price, quantity }));
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
            {!cart.cart.length == 0 ? (
              cart.cart.map((product, index) => (
                <div key={index} className="cart-item">
                  <img src={product.image} alt={product.name} />

                  <div className="item-details">
                    <p className="item-name">
                      {product.name.length > 10
                        ? product.name.substring(0, 18) + "..."
                        : product.name}
                    </p>
                    <p className="item-price">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="remove-button">
                    <button
                      className="mb-10"
                      onClick={() =>
                        handleRemoveItem(
                          product.id,
                          product.price,
                          product.quantity
                        )
                      }
                    >
                      <FaTrash />
                    </button>
                    <span className="item-quantity">{product.quantity}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-cart">Your cart is empty</p>
            )}
          </div>
          <div className="m-20 bottom-Wrapper">
            <p className="item-price">
              ${cart.total.price > 0 ? cart.total.price.toFixed(2) : "0.00"}
            </p>

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
