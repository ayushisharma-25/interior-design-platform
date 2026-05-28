import { useNavigate } from "react-router-dom";

function SuccessModal({
    showSuccess,
    setShowSuccess,
    orderData,
}) {
    const navigate = useNavigate();

    // console.log("SHOW SUCCESS:", showSuccess);
    // console.log("ORDER DATA:", orderData);
    if (!showSuccess || !orderData) return null;

    return (
        <div className="overlay1">

            <div className="success-modal">

                <button
                    type="button"
                    className="close-btn"
                    onClick={() => {
                        setShowSuccess(false);
                        navigate("/");
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="modal-body">

                    <div className="left-section">

                        <div className="modal-header">

                            <div className="icon-circle">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>

                            <h2>
                                Thank you for your purchase, {orderData?.firstName}!
                            </h2>

                            <p className="sub-text">
                                Order placed successfully 🎉
                            </p>

                        </div>

                        <div className="details">

                            <div>
                                <span>Order ID:</span>
                                <strong>{orderData?.id}</strong>
                            </div>

                            <div>
                                <span>Payment ID:</span>
                                <strong>{orderData?.paymentId}</strong>
                            </div>

                            <div>
                                <span>Estimated Delivery:</span>
                                <strong>{orderData?.estimatedDelivery}</strong>
                            </div>

                            <div>
                                <span>Delivery Time:</span>
                                <strong>{orderData?.shippingDays}</strong>
                            </div>

                            <div>
                                <span>Payment Mode:</span>

                                <strong>
                                    {orderData?.paymentMode === "cod"
                                        ? "Cash on Delivery"
                                        : "Online Paid"}
                                </strong>
                            </div>

                            <div>
                                <span>Total:</span>

                                <strong>
                                    ₹{orderData?.total?.toLocaleString("en-IN")}
                                </strong>
                            </div>

                        </div>
                    </div>

                    <div className="right-section">

                        <h3>Items</h3>

                        <div
                            className={`items ${orderData?.cart?.length > 3 ? "scroll" : ""
                                }`}
                        >

                            {orderData?.cart?.map((item) => (

                                <div
                                    key={item.id}
                                    className="item"
                                >

                                    <img src={item.image || item.img} alt={item.name} />

                                    <div>

                                        <p>
                                            {item.title || item.name}

                                            <span className="payment-tag">
                                                {orderData?.paymentMode === "cod"
                                                    ? "COD"
                                                    : "PAID"}
                                            </span>

                                        </p>

                                        <span className="many">
                                            Qty: {item.qty || 1}
                                        </span>

                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

                <div className="modal-footer">

                    <button
                        type="button"
                        className="shop-btn"
                        onClick={() => {
                            setShowSuccess(false);
                            navigate("/about");
                        }}
                    >
                        Continue Shopping
                    </button>

                </div>
            </div>
        </div>
    );
}

export default SuccessModal;