import { useCart } from "../../context/CartContext";
import { useEffect } from "react";
import "./CartDrawer.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CartDrawer = () => {
  const {
    cart,
    isOpen,
    setIsOpen,
    removeItem,
    updateQty,
    total,
  } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const open = () => setIsOpen(true);

    document.addEventListener("openCart", open);

    return () => {
      document.removeEventListener("openCart", open);
    };
  }, []);

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>

      <div className="cart-header">
        <h3>Cart ({cart.length})</h3>
        <button onClick={() => setIsOpen(false)}>✖</button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart">

            <h3>Cart is Empty </h3>
            <p>
              Add items to your cart
            </p>
          </div>
        ) : (
          <div className="infos">
            {cart.map((item) => (
              <div className="cart-infoo" key={item.id}>
                <img src={item.image || item.image} />

                <div className="info">
                  <p>₹{item.price.toLocaleString("en-IN")}</p>
                  <h4>{item.name || item.title}</h4>

                  <div className="qty">
                    <button onClick={() => updateQty(item.id, "dec")}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, "inc")}>+</button>
                  </div>
                </div>
                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="cart-footer">
        <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>
        <button className="checkout"
          onClick={() => {
            if (cart.length === 0) {
              toast.error("Cart is empty!", {
                icon: "fa-solid fa-cart-shopping"
              });
              return;
            }
            setIsOpen(false);
            navigate("/checkout");
          }}>
          <i className="fas fa-lock"></i>Checkout</button>
      </div>
    </div>
  );
};

export default CartDrawer;