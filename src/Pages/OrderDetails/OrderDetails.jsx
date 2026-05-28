import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./OrderDetails.css";
import { getOrderStatus } from "../../utils/OrderStatus";
import { downloadInvoice } from "../../utils/DownloadInvoice";

function OrderDetails() {

    const navigate = useNavigate();
    const { orderId } = useParams();

    const [copiedId, setCopiedId] = useState(null);

    const orders = JSON.parse(localStorage.getItem("allOrders")) || [];
    const order = orders.find((item) => item?.orderId === orderId);

    if (!order) return <h2>Order not found</h2>;

    const currentStatus =
        order.status === "Cancelled"
            ? "Cancelled"
            : getOrderStatus(order.createdAt);
    const item = order?.cart?.[0];

    const getCurrentStatus = () => {
        const orderTime = new Date(order.createdAt).getTime();
        const now = Date.now();

        const diff = now - orderTime;

        const minutes = diff / (1000 * 60);
        const hours = diff / (1000 * 60 * 60);
        const days = diff / (1000 * 60 * 60 * 24);

        if (minutes < 5) return "Order Placed";
        if (minutes < 30) return "Processing";
        if (hours < 24) return "Shipped";
        if (days < 2) return "Out for Delivery";
        return "Delivered";
    };
    const [showAddressEdit, setShowAddressEdit] = useState(false);

    const [newAddress, setNewAddress] = useState({
        address: order.address,
        city: order.city,
        state: order.state,
        pinCode: order.pinCode
    });

    const copyOrderId = async (id, e) => {
        e.stopPropagation();

        await navigator.clipboard.writeText(id);

        setCopiedId(id);

        setTimeout(() => {
            setCopiedId(null);
        }, 1000);
    };

    const updateOrderInStorage = (updatedFields) => {
        const updatedOrders = orders.map((item) =>
            item.orderId === order.orderId
                ? { ...item, ...updatedFields }
                : item
        );

        localStorage.setItem("allOrders", JSON.stringify(updatedOrders));
        window.location.reload();
    };

    const handleCancelOrder = () => {
        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this order?"
        );

        if (!confirmCancel) return;

        let cancelMessage = "Order cancelled successfully";

        if (order.paymentMode !== "cod" && order.paymentStatus === "Paid") {
            cancelMessage =
                "Order cancelled. Your refund will be added to Indoor Wallet within 3-5 business days.";
        }

        updateOrderInStorage({
            status: "Cancelled",
            paymentNote:
                order.paymentMode !== "cod"
                    ? "Refund Initiated to Indoor Wallet"
                    : ""
        });

        alert(cancelMessage);
    };

    const handleReturnRequest = () => {
        updateOrderInStorage({
            returnStatus: "Return Requested"
        });

        alert("Return request sent successfully");
    };

    const handleExchangeRequest = () => {
        updateOrderInStorage({
            exchangeStatus: "Exchange Requested"
        });

        alert("Exchange request sent to admin successfully");
    };

    const handleAddressSave = () => {
        updateOrderInStorage({
            address: newAddress.address,
            city: newAddress.city,
            state: newAddress.state,
            pinCode: newAddress.pinCode
        });

        setShowAddressEdit(false);
        alert("Address updated successfully");
    };

    const handleDownloadInvoice = () => {
        downloadInvoice(order, item);
    };

    const trackingSteps =
        currentStatus === "Cancelled"
            ? [
                {
                    title: "Cancelled",
                    message: "Your order has been cancelled",
                    date: order.orderDate,
                    icon: "fa-xmark"
                }
            ]
            : [
                {
                    title: "Order Placed",
                    message: "Your order has been placed successfully",
                    date: `${order.orderDate}, ${order.orderTime}`,
                    icon: "fa-check"
                },
                {
                    title: "Processing",
                    message: "Your order is being processed",
                    date: order.processingDate || "Expected soon",
                    icon: "fa-clock"
                },
                {
                    title: "Shipped",
                    message: "Your order has been shipped",
                    date: order.shippingDate || order.estimatedDelivery,
                    icon: "fa-truck"
                },
                {
                    title: "Out for Delivery",
                    message: "Your order is out for delivery",
                    date: order.outForDeliveryDate || order.estimatedDelivery,
                    icon: "fa-location-dot"
                },
                {
                    title: "Delivered",
                    message: "Package delivered successfully",
                    date: order.estimatedDelivery,
                    icon: "fa-box"
                }
            ];

    const currentStepIndex = trackingSteps.findIndex(
        (step) => step.title === currentStatus
    );

    return (
        <>
            <div className="container">
                <div className="od-wrapper">
                    <div className="od-container">

                        <button
                            className="od-back-btn"
                            onClick={() => navigate("/my-orders")}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            Back to My Orders
                        </button>

                        <div className="od-header">
                            <div>
                                <h1>ORDER DETAILS</h1>

                                <div className="od-order-id">
                                    <span>Order ID: {order.orderId}</span>
                                    <div
                                        className="copyy-btn"
                                        onClick={(e) => copyOrderId(order.orderId, e)}
                                    >
                                        {copiedId === order.orderId ? (
                                            <>
                                                <i className="fa-solid fa-check"></i>
                                                <span>Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <i className="fa-regular fa-copy"></i>
                                                <span></span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="od-header-right">
                                <span className={`od-status-pill ${currentStatus.toLowerCase().replace(/\s/g, "-")}`}>
                                    <i className="fa-regular fa-clock"></i>
                                    {currentStatus}
                                </span>
                                <p>Placed on {order.orderDate}</p>
                            </div>
                        </div>

                        <div className="od-top-grid">

                            <div className="od-card">
                                <h3>
                                    <div className="od-icon">
                                        <i className="fa-solid fa-box"></i>
                                    </div>
                                    ORDER INFORMATION
                                </h3>

                                <p>Order ID</p>
                                <h4>{order.orderId}</h4>

                                <p>
                                    <i className="fa-regular fa-calendar"></i>
                                    {order.orderDate}
                                </p>
                                <span className={`od-status-pill ${currentStatus.toLowerCase().replace(/\s/g, "-")}`}>
                                    <i className="fa-regular fa-clock"></i>
                                    {currentStatus}
                                </span>
                            </div>

                            <div className="od-card">
                                <h3>
                                    <div className="od-icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    DELIVERY ADDRESS
                                </h3>

                                <h4>
                                    {order.firstName} {order.lastName}
                                </h4>

                                <p>
                                    {order.address}
                                    <br />
                                    {order.city}, {order.state} - {order.pinCode}
                                </p>

                                <p>Phone: +91 {order.phone}</p>
                            </div>

                            <div className="od-card">
                                <h3>
                                    <div className="od-icon">
                                        <i className="fa-solid fa-credit-card"></i>
                                    </div>
                                    PAYMENT INFORMATION
                                </h3>

                                <p>Payment Method</p>
                                <h4>
                                    {order.paymentMode === "cod"
                                        ? "Cash on Delivery"
                                        : "Online Payment"}
                                </h4>

                                <p>Payment Status</p>
                                <span className="od-paid-badge">
                                    {order.paymentStatus}
                                </span>

                                <h2 className="od-pay">₹{order.total?.toLocaleString()}</h2>
                                {order.paymentNote && (
                                    <p style={{ color: "green", marginTop: "10px", fontWeight: "600" }}>
                                        {order.paymentNote}
                                    </p>
                                )}
                            </div>

                            <div className="od-card">
                                <h3>
                                    <div className="od-icon">
                                        <i className="fa-solid fa-truck"></i>
                                    </div>
                                    DELIVERY INFORMATION
                                </h3>

                                <p>Expected Delivery</p>
                                <h4>{order.estimatedDelivery}</h4>

                                <p>Shipping Method</p>
                                <h4>{order.shippingMethod || "Standard Delivery"}</h4>

                                <p>Delivery Speed</p>
                                <h4>{order.shippingDays}</h4>

                                <p>Tracking ID</p>
                                <h4>AWB123456789</h4>
                            </div>
                        </div>

                        <div className="od-middle-grid">

                            <div className="od-items-card">
                                <h3>
                                    <div className="tracking-icon-box">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                    </div>
                                    ORDER ITEMS ({order.cart?.length} Item)
                                </h3>

                                <div className="od-item-row">
                                    <img
                                        src={
                                            item?.image ||
                                            item?.thumbnail ||
                                            item?.images?.[0]
                                        }
                                        alt={item?.title}
                                    />

                                    <div className="od-product-info">
                                        <h2>{item?.title}</h2>
                                        <p>Premium quality furniture</p>
                                        <span>Qty: {item?.qty}</span>
                                    </div>
                                    <div className="od-pp">
                                        <p>Price</p>
                                        <h4>₹{item?.price}</h4>
                                    </div>

                                    <div className="od-pp">
                                        <p>Total</p>
                                        <h4>₹{order.total}</h4>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>

                            <div className="od-summary-card">
                                <h3 className="summary-heading">
                                    <div className="summary-icon">
                                        <i className="fa-solid fa-receipt"></i>
                                    </div>
                                    ORDER SUMMARY
                                </h3>

                                <div className="od-summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{order.subtotal?.toLocaleString()}</span>
                                </div>

                                <div className="od-summary-row">
                                    <span>Shipping Charges</span>
                                    <span>
                                        {order.shipping === 0
                                            ? "Free"
                                            : `₹${order.shipping?.toLocaleString()}`}
                                    </span>
                                </div>

                                <div className="od-summary-row">
                                    <span>Tax (18% GST)</span>
                                    <span>₹{order.tax?.toLocaleString()}</span>
                                </div>

                                {order.discount > 0 && (
                                    <div className="od-summary-row discount-row">
                                        <span>Discount</span>
                                        <span>-₹{order.discount?.toLocaleString()}</span>
                                    </div>
                                )}

                                <div className="summary-divider"></div>

                                <div className="od-summary-row total-row">
                                    <span>Total Amount</span>
                                    <span>₹{order.total?.toLocaleString()}</span>
                                </div>

                                <p className="saved-text">
                                    You saved ₹
                                    {(
                                        (order.subtotal || 0) +
                                        (order.shipping || 0) +
                                        (order.tax || 0) -
                                        (order.total || 0)
                                    ).toLocaleString()}{" "}
                                    on this order
                                </p>
                            </div>
                        </div>

                        <div className="od-bottom-grid">

                            <div className="od-tracking-card">
                                <h3 className="tracking-heading">
                                    <div className="tracking-icon-box">
                                        <i className="fa-solid fa-truck-fast"></i>
                                    </div>
                                    ORDER TRACKING
                                </h3>

                                <div className="tracking-list">
                                    {trackingSteps.map((step, index) => {
                                        const isCompleted = index < currentStepIndex;
                                        const isCurrent = index === currentStepIndex;

                                        return (
                                            <div key={index} className="tracking-item">
                                                <div className="tracking-left">
                                                    <div
                                                        className={`tracking-circle
                                                        ${isCompleted ? "completed" : ""}
                                                        ${isCurrent ? "current" : ""}`}
                                                    >
                                                        <i
                                                            className={`fa-solid ${isCompleted ? "fa-check" : step.icon
                                                                }`}
                                                        ></i>
                                                    </div>

                                                    {index !== trackingSteps.length - 1 && (
                                                        <div
                                                            className={`tracking-line ${index < currentStepIndex ? "active" : ""
                                                                }`}
                                                        ></div>
                                                    )}
                                                </div>

                                                <div className="tracking-content">
                                                    <h4
                                                        className={
                                                            isCurrent
                                                                ? "current-text"
                                                                : isCompleted
                                                                    ? "completed-text"
                                                                    : ""
                                                        }
                                                    >
                                                        {step.title}
                                                    </h4>
                                                    <p>{step.date}</p>
                                                </div>

                                                <div
                                                    className={`tracking-message ${isCurrent ? "current-text" : ""
                                                        }`}
                                                >
                                                    {step.message}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="od-actions-card">
                                <h3 className="summary-heading">
                                    <div className="summary-icon">
                                        <i className="fa-solid fa-gear"></i>
                                    </div>
                                    MANAGE ORDER
                                </h3>

                                <div className="od-actions-grid">
                                    <button
                                        onClick={handleCancelOrder}
                                        disabled={
                                            currentStatus === "Shipped" ||
                                            currentStatus === "Out for Delivery" ||
                                            currentStatus === "Delivered" ||
                                            order.status === "Cancelled"
                                        }
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                        {order.status === "Cancelled" ? "Cancelled" : "Cancel Order"}
                                    </button>

                                    <button
                                        onClick={handleReturnRequest}
                                        disabled={currentStatus !== "Delivered"}
                                    >
                                        <i className="fa-solid fa-rotate-left"></i>
                                        {order.returnStatus || "Return Request"}
                                    </button>

                                    <button
                                        onClick={handleExchangeRequest}
                                        disabled={currentStatus !== "Delivered"}
                                    >
                                        <i className="fa-solid fa-right-left"></i>
                                        {order.exchangeStatus || "Exchange Request"}
                                    </button>

                                    <button onClick={() => navigate(`/track-order/${order.orderId}`)}>
                                        <i className="fa-solid fa-truck-fast"></i>
                                        Track Order
                                    </button>

                                    <button
                                        onClick={() => setShowAddressEdit(true)}
                                        disabled={
                                            currentStatus !== "Order Placed" &&
                                            currentStatus !== "Processing"
                                        }
                                    >
                                        <i className="fa-solid fa-location-dot"></i>
                                        Change Address
                                    </button>

                                    <button onClick={handleDownloadInvoice}>
                                        <i className="fa-solid fa-file-arrow-down"></i>
                                        Download Invoice
                                    </button>
                                </div>
                            </div>

                            <div className="od-help-card">
                                <h3 className="summary-heading">
                                    <div className="summary-icon">
                                        <i className="fa-solid fa-headset"></i>
                                    </div>
                                    NEED HELP?
                                </h3>
                                <p>
                                    If you have any questions about your order,
                                    contact support team.
                                </p>

                                <a
                                    href="mailto:indoor@gmail.com"
                                    className="contact-support-btn"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {showAddressEdit && (
                    <div className="address-modal">
                        <div className="address-modal-box">
                            <h3>Edit Address</h3>

                            <input
                                type="text"
                                placeholder="Address"
                                value={newAddress.address}
                                onChange={(e) =>
                                    setNewAddress({
                                        ...newAddress,
                                        address: e.target.value
                                    })
                                }
                            />

                            <input
                                type="text"
                                placeholder="City"
                                value={newAddress.city}
                                onChange={(e) =>
                                    setNewAddress({
                                        ...newAddress,
                                        city: e.target.value
                                    })
                                }
                            />

                            <input
                                type="text"
                                placeholder="State"
                                value={newAddress.state}
                                onChange={(e) =>
                                    setNewAddress({
                                        ...newAddress,
                                        state: e.target.value
                                    })
                                }
                            />

                            <input
                                type="text"
                                placeholder="Pincode"
                                value={newAddress.pinCode}
                                onChange={(e) =>
                                    setNewAddress({
                                        ...newAddress,
                                        pinCode: e.target.value
                                    })
                                }
                            />

                            <button onClick={handleAddressSave}>
                                Save Address
                            </button>

                            <button onClick={() => setShowAddressEdit(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default OrderDetails;