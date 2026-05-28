import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Toast.css";

function Toast({ show, setShow, openWishlist, message }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [show]);

    if (!show) return null;

    const isSaved = message === "saved";

    return (
        <div className="wishlist-toast">
            <div className="toast-progress"></div>
                <p>
                    <i className={isSaved ? "fas fa-heart" : "fas fa-heart-crack"}></i>
                    {isSaved ? " Item saved" : " Item removed"}
                </p>
            <button onClick={() => {
                openWishlist(true);
                setShow(false);
            }}>
                View Wishlist
            </button>
        </div>
    );
}

export default Toast;