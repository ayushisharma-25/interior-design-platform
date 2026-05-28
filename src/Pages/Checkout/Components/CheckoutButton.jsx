function CheckoutButton({
    cart,
    loading,
    paymentMethod,
    handlePayment,
}) {
    return (
        <button
            className={`pay-now-btn ${cart.length === 0 ? "disabled-btn" : ""}`}
            onClick={handlePayment}
            disabled={loading}
        >
            {loading
                ? "Processing..."
                : paymentMethod === "cod"
                    ? "Place Order"
                    : "Proceed to Payment"}
        </button>
    );
}

export default CheckoutButton;