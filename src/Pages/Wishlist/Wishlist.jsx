import './Wishlist.css'
import { useEffect, useState, useRef } from "react";
import { useCart } from "../../context/CartContext";
import { createPortal } from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Wishlist({ isOpen, setIsOpen }) {

    const [items, setItems] = useState([]);
    const [loadingId, setLoadingId] = useState(null);
    const [toast, setToast] = useState(null);

    const drawerRef = useRef(null);

    const { addToCart, cart } = useCart();

    const getWishlist = () => {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const handleAdd = async (item) => {
        setLoadingId(item.id);

        await new Promise((resolve) => setTimeout(resolve, 800));

        addToCart(item, { openCart: false });

        setLoadingId(null);
        setToast(item);

        setTimeout(() => setToast(null), 2000);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    useEffect(() => {
        setItems(getWishlist());

        if (isOpen) {
            document.querySelector(".wishlist-drawer button")?.focus();
        }

        const update = () => setItems(getWishlist());
        window.addEventListener("wishlistUpdated", update);

        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("wishlistUpdated", update);
        };

    }, [isOpen]);

    const removeItem = (id) => {
        let updated = items.filter((item) => item.id !== id);
        localStorage.setItem("wishlist", JSON.stringify(updated));
        setItems(updated);

        window.dispatchEvent(new Event("wishlistUpdated"));
    };

    return (
        <>
            {isOpen && (
                <div
                    className="overlay"
                    onClick={() => setIsOpen(false)}
                    role="button"
                    aria-label="Close wishlist overlay"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setIsOpen(false)}
                />
            )}

            <div
                ref={drawerRef}
                className={`wishlist-drawer ${isOpen ? "open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="wishlist-title"
                aria-label="Wishlist drawer"
            >

                <div className="wishlist-header">
                    <i className="fas fa-heart" aria-hidden="true"></i>

                    <h3 id="wishlist-title">My Wishlist</h3>

                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close wishlist"
                    >
                        ✖
                    </button>
                </div>

                <div className="wishlist-content">

                    {items.length === 0 ? (
                        <div className="empty-wishlist" role="status">
                            <div className="empty-icon">
                                <i className="far fa-heart" aria-hidden="true"></i>
                            </div>

                            <h3>Save things as you browse</h3>
                            <p>
                                Tap ♡ on any product. It lands here so you don't lose it.
                            </p>
                        </div>
                    ) : (
                        <div className="wishlist-list">

                            {items.map((item) => (
                                <div
                                    className="wishlist-item"
                                    key={item.id}
                                    tabIndex="0"
                                    aria-label={`Wishlist item ${item.name}`}
                                >

                                    <img
                                        src={item.image || item.img}
                                        alt={item.name || "Wishlist product image"}
                                    />

                                    <div className="wishlist-info">

                                        <p>Rs.{item.price ? item.price.toLocaleString() : "0"}</p>

                                        <h4>{item.name}</h4>

                                        <button
                                            className={`add-cart-btn 
                                            ${loadingId === item.id ? "loading" : ""} 
                                            ${isInCart(item.id) ? "added" : ""}`}
                                            onClick={() => handleAdd(item)}
                                            disabled={loadingId === item.id}
                                            aria-label={`Add ${item.name} to cart`}
                                        >
                                            {loadingId === item.id
                                                ? "Adding..."
                                                : isInCart(item.id)
                                                    ? "Added to Cart"
                                                    : "Add to Cart"}
                                        </button>

                                    </div>

                                    <button
                                        className="delete-btn"
                                        onClick={() => removeItem(item.id)}
                                        aria-label={`Remove ${item.name} from wishlist`}
                                    >
                                        <i className="fas fa-trash" aria-hidden="true"></i>
                                    </button>

                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {toast &&
                createPortal(
                    <div
                        className="ay-toaster"
                        role="status"
                        aria-live="polite"
                    >
                        <p>Added to Cart</p>

                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setTimeout(() => {
                                    document.dispatchEvent(new Event("openCart"));
                                }, 100);
                            }}
                            aria-label="Open cart"
                        >
                            View Cart
                        </button>
                    </div>
                )
            }
        </>
    );
}

export default Wishlist;