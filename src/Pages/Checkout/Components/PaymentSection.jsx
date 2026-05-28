function PaymentSection({
  paymentMethod,
  setPaymentMethod,
  onlineMethod,
  setOnlineMethod,
  openOnline,
  setOpenOnline,
}) {
  return (
    <section className="address-section">
      <h2>Payment</h2>

      <p className="sub-text">
        All transactions are secure and encrypted.
      </p>

      <div className="payment-container">

        <div
          className={`payment-card ${
            paymentMethod === "online"
              ? "active-card"
              : ""
          }`}
          onClick={() => {
            setPaymentMethod("online");
            setOpenOnline(!openOnline);
          }}
        >

          <div className="card-main">

            <div className="custom-radio">
              <div
                className={`radio-inner ${
                  paymentMethod === "online"
                    ? "selected"
                    : ""
                }`}
              ></div>
            </div>

            <div className="payment-details">
              <span className="method-title">
                Online Payment
              </span>

              <div className="brand-icons">
                <i className="fa-brands fa-google-pay"></i>
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
              </div>
            </div>

            <i
              className={`fa-solid fa-chevron-down arrow ${
                openOnline ? "rotate" : ""
              }`}
            ></i>
          </div>

          <div
            className={`dropdown-content ${
              openOnline &&
              paymentMethod === "online"
                ? "show"
                : ""
            }`}
          >

            <div className="sub-options">

              {["gpay", "phonepe", "paytm", "card"].map(
                (method) => (
                  <label
                    key={method}
                    className={`sub-option-item ${
                      onlineMethod === method
                        ? "selected-sub"
                        : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >

                    <input
                      type="radio"
                      name="onlineMethod"
                      checked={onlineMethod === method}
                      onChange={() =>
                        setOnlineMethod(method)
                      }
                    />

                    <span className="sub-texts">

                      {method === "gpay" && (
                        <>
                          <i className="fa-brands fa-google-pay"></i>
                          Google Pay
                        </>
                      )}

                      {method === "phonepe" && (
                        <>
                          <i className="fa-solid fa-mobile-screen"></i>
                          PhonePe
                        </>
                      )}

                      {method === "paytm" && (
                        <>
                          <i className="fa-solid fa-wallet"></i>
                          Paytm
                        </>
                      )}

                      {method === "card" && (
                        <>
                          <i className="fa-solid fa-credit-card"></i>
                          Debit / Credit Card
                        </>
                      )}

                    </span>
                  </label>
                )
              )}

            </div>
          </div>
        </div>

        <div
          className={`payment-card ${
            paymentMethod === "cod"
              ? "active-card"
              : ""
          }`}
          onClick={() => {
            setPaymentMethod("cod");
            setOpenOnline(false);
          }}
        >

          <div className="card-main">

            <div className="custom-radio">
              <div
                className={`radio-inner ${
                  paymentMethod === "cod"
                    ? "selected"
                    : ""
                }`}
              ></div>
            </div>

            <div className="payment-details">
              <span className="method-title">
                Cash on Delivery (COD)
              </span>
            </div>

            <i className="fa-solid fa-truck-fast"></i>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentSection;