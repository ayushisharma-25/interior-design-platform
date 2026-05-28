function OrderSummary({
  cart,
  discountCode,
  setDiscountCode,
  handleApplyDiscount,
  appliedDiscount,
  discountError,
  subtotal,
  shippingFinal,
  tax,
  discountAmount,
  grandTotal,
}) {
  return (
    <div className="checkout-sidebar">

      <div
        className={`cart-items ${
          cart.length > 3 ? "scroll" : ""
        }`}
      >

        {cart.map((item) => (
          <div
            className="cart-item"
            key={item.id}
          >

            <div className="img-wrapper">
              <img
                src={item.image}
                alt={item.name}
              />

              <span className="qty-badge">
                {item.qty || 1}
              </span>
            </div>

            <div className="item-info">
              <p className="item-name">
                {item.title ||
                  item.name ||
                  "No Name"}
              </p>

              <p className="item-price">
                ₹{item.price.toLocaleString()}
              </p>
            </div>

          </div>
        ))}
      </div>

      <div className="discount-section">

        <input
          placeholder="Discount code"
          value={discountCode}
          onChange={(e) =>
            setDiscountCode(e.target.value)
          }
        />

        <button
          onClick={handleApplyDiscount}
          disabled={!discountCode.trim()}
        >
          Apply
        </button>

      </div>

      {discountError && (
        <p className="error-text">
          {discountError}
        </p>
      )}

      {appliedDiscount && (
        <p className="success-text">
          Code "{appliedDiscount.code}" applied 🎉
        </p>
      )}

      <div className="total-lines">

        <div className="line">
          <span>Subtotal</span>

          <span>
            ₹{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="line">
          <span>Shipping</span>

          <span>
            {shippingFinal === 0
              ? "FREE"
              : `₹${shippingFinal}`}
          </span>
        </div>

        {appliedDiscount && (
          <div className="line discount">
            <span>
              Discount ({appliedDiscount.code})
            </span>

            <span>
              -₹{discountAmount}
            </span>
          </div>
        )}

        <div className="line">
          <span>Tax (GST 18%)</span>

          <span>
            ₹{tax.toLocaleString()}
          </span>
        </div>

        <div className="line total">

          <strong>Total</strong>

          <div className="total-amount">
            <small>INR</small>

            <strong>
              ₹{grandTotal.toLocaleString()}
            </strong>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OrderSummary;