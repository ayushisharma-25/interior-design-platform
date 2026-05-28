import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { products } from "../../Data/AboutProducts";
import { createPortal } from "react-dom";

function ExclusiveSection({ triggerToast }) {

    const navigate = useNavigate();
    const [toast, setToast] = useState(null);
    const [loadingId, setLoadingId] = useState(null);
    const { addToCart, setCart, setIsOpen } = useCart();

    const [filter, setFilter] = useState("Dining");

    const [wishlistIds, setWishlistIds] = useState([]);

    const getWishlist = () => {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    };

    const toggleWishlist = (item) => {

        let wishlist = getWishlist();

        const exists = wishlist.find((i) => i.id === item.id);

        let updated;

        if (exists) {

            updated = wishlist.filter((i) => i.id !== item.id);

        } else {

            updated = [...wishlist, item];
        }

        localStorage.setItem("wishlist", JSON.stringify(updated));

        setWishlistIds(updated.map((item) => item.id));

        window.dispatchEvent(new Event("wishlistUpdated"));
    };

    const handleAddToCart = async (item) => {
        setLoadingId(item.id);

        await new Promise((res) => setTimeout(res, 500));

        addToCart(item, { openCart: false });

        setLoadingId(null);
        setToast(item);

        setTimeout(() => setToast(null), 3000);
    };

    const filteredProducts =
        filter === "All"
            ? products
            : products.filter((item) => item.category === filter);

    useEffect(() => {
        const ids = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlistIds(ids.map((item) => item.id));

    }, []);


    return (
        <section className="exclusive">

            <div className="container">

                <div className="exclusive-top">

                    <div className="left">
                        <h2>
                            Our new exclusive
                            <br />
                            collections
                        </h2>
                    </div>

                    <div className="right">
                        <p>
                            Elevate your interiors with our curated selection of
                            premium furniture and accessories
                        </p>
                    </div>

                </div>

                <div className="categories">

                    {["All", "Dining", "Chair", "Bed", "Kitchen", "Shelves"].map((cat) => (

                        <button
                            key={cat}
                            className={filter === cat ? "active" : ""}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>

                    ))}

                </div>

                <div className="products">

                    {filteredProducts.map((item) => (

                        <div className="card" key={item.id}>

                            <button
                                className="like-btn"
                                onClick={() => {

                                    const exists = wishlistIds.includes(item.id);

                                    toggleWishlist(item);

                                    triggerToast(
                                        exists ? "removed" : "saved"
                                    );
                                }}
                            >

                                <i
                                    className={
                                        wishlistIds.includes(item.id)
                                            ? "fas fa-heart active"
                                            : "far fa-heart"
                                    }
                                ></i>

                            </button>

                            <img src={item.img} alt={item.name} />

                            <p className="price">
                                ₹ {item.price?.toLocaleString("en-IN")}
                            </p>

                            <h4>{item.name}</h4>

                            <div className="card-actions">

                                <button
                                    className="add-cart-btn"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    {loadingId === item.id ? "Adding..." : "Add to Cart"}
                                </button>

                                <button
                                    className="buy-now-btn"
                                    onClick={() => {

                                        const buyItem = {
                                            id: item.id,
                                            title: item.name,
                                            image: item.img,
                                            price: item.price,
                                            qty: 1
                                        };

                                        setCart([buyItem]);

                                        setIsOpen(false);

                                        navigate("/checkout");
                                    }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {toast &&
                createPortal(
                    <div className="ay-toaster" role="status" aria-live="polite">
                        <p>Added to Cart</p>

                        <button
                            onClick={() => {
                                setToast(null);
                                document.dispatchEvent(new Event("openCart"));
                            }}
                        >
                            View Cart
                        </button>
                    </div>,
                    document.body
                )
            }
        </section>
    );
}

export default ExclusiveSection;