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
          } sm:mt-14 md:mt-0 sm:-right-[800px] md:-right-[1024px] md:w-[400px]  lg:-right-[1280px] lg:w-[400px] sm:w-screen sm:h-h-screen`} //hamburger menu pop up
        >
          <div className="cart-header-wrapper m-5">
            <h1 className="title">Shopping Cart</h1>
          </div>
          <div className="cart-item-wrapper sm:h-[60%] ">
            {!cart.cart.length == 0 ? (
              cart.cart.map((product, index) => (
                <div
                  key={index}
                  className="cart-item sm:w-[90%] sm:h-[100px] sm:flex sm:justify-between sm:items-center sm:mx-auto sm:my-5 sm:rounded-md sm:shadow-md"
                >
                  <img src={product.image} alt={product.name}/>

                  <div className="item-details">
                    <p className="item-name sm:max-w-[140px]">
                      {product.name.length > 10
                        ? product.name.substring(0, 18) + "..."
                        : product.name}
                    </p>
                    <p className="item-price">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="item-button-wrapper">
                    <button
                      className="remove-button"
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
          <div className="button-Wrapper">
            <p className="total-price">
              ${cart.total.price > 0 ? cart.total.price.toFixed(2) : "0.00"}
            </p>

            <CartButton>Check out</CartButton>
          </div>
        </div>
        <button className="cart-button md:mr-[10%]" onClick={toggleMenu}>
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
