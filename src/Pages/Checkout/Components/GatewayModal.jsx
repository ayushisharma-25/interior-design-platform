// import { useEffect } from "react";

function GatewayModal({
    showGateway,
    onlineMethod,
    grandTotal,
    paymentStatus,
    setPaymentStatus,
    setShowGateway,
    handleFinalOrder,
}) {

    if (!showGateway) return null;

    // useEffect(() => {
    //     if (showGateway) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }

    //     return () => {
    //         document.body.style.overflow = "auto";
    //     };
    // }, [showGateway]);

    return (
        <div
            className="gateway-overlay"
            onClick={() => setShowGateway(false)}
        >
            <div
                className="gateway-modal"
                onClick={(e) => e.stopPropagation()}
            >

                {onlineMethod !== "card" ? (
                    <div className="upi-box">

                        <h2>Scan & Pay</h2>

                        <p className="pay-amount">
                            Pay ₹{grandTotal.toLocaleString()}
                        </p>

                        <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=indoor@paytm&pn=IndoorFurniture&am=${grandTotal}&cu=INR`}
                            alt="UPI QR"
                        />

                        <p className="upi-id">
                            indoorfurniture@paytm
                        </p>

                        <p className="secure-payment-text">
                            🔒 Secured by 256-bit SSL Encryption
                        </p>

                        <div className="payment-status">
                            <div className="loader"></div>

                            <p>
                                {paymentStatus === "processing"
                                    ? "Payment received. Verifying transaction..."
                                    : "Waiting for payment confirmation..."}
                            </p>
                        </div>

                        <div className="gateway-actions">

                            <button
                                disabled={paymentStatus === "processing"}
                                onClick={async () => {

                                    setPaymentStatus("processing");

                                    setTimeout(async () => {
                                        setShowGateway(false);
                                        await handleFinalOrder();
                                    }, 2000);

                                }}
                            >
                                {paymentStatus === "processing"
                                    ? "Checking..."
                                    : "Check Payment Status"}
                            </button>

                            <button
                                onClick={() => {
                                    setShowGateway(false);
                                    setPaymentStatus("idle");
                                }}
                            >
                                Cancel
                            </button>

                        </div>
                    </div>
                ) : (
                    <div className="card-payment-form">

                        <h2>Card Payment</h2>

                        <input
                            type="text"
                            placeholder="Card Number"
                            maxLength="16"
                        />

                        <div className="card-row">

                            <input
                                type="text"
                                placeholder="MM/YY"
                                maxLength="5"
                            />

                            <input
                                type="password"
                                placeholder="CVV"
                                maxLength="3"
                            />

                        </div>

                        <input
                            type="text"
                            placeholder="Card Holder Name"
                        />

                        <p className="secure-payment-text">
                            🔒 Your payment info is encrypted
                        </p>

                        <div className="gateway-actions">

                            <button
                                onClick={() => {
                                    setShowGateway(false);
                                    handleFinalOrder();
                                }}
                            >
                                Pay ₹{grandTotal.toLocaleString()}
                            </button>

                            <button
                                onClick={() => {
                                    setShowGateway(false);
                                    setPaymentStatus("idle");
                                }}
                            >
                                Cancel
                            </button>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GatewayModal;