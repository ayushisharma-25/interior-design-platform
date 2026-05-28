function CheckoutForm({
  form,
  errors,
  handleChange,
  handleBlur,
  handlePincodeChange,
}) {
  return (
    <>
      <section className="address-section">
        <div className="section-header">
          <h2>Contact</h2>
        </div>

        <div className="floating-group">
          <input
            type="email"
            id="email"
            name="email"
            onBlur={handleBlur}
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`full-width ${errors.email ? "error-input" : ""}`}
          />
        </div>

        {errors.email && (
          <p className="error-text">{errors.email}</p>
        )}
      </section>

      <section className="address-section">
        <h2>Delivery</h2>

        <select name="country" className="full-width">
          <option>India</option>
        </select>

        <div className="input-grid">

          <div className="input-group">
            <input
              name="firstName"
              id="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error-input" : ""}
            />

            <p className="error-space">
              {errors.firstName || ""}
            </p>
          </div>

          <div className="input-group">
            <input
              name="lastName"
              id="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
            />

            <p className="error-space"></p>
          </div>
        </div>

        <input
          name="address"
          id="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className={`full-width ${errors.address ? "error-input" : ""}`}
        />

        {errors.address && (
          <p className="error-text">{errors.address}</p>
        )}

        <input
          name="apartment"
          id="apartment"
          placeholder="Apartment, suite, etc. (optional)"
          value={form.apartment}
          onChange={handleChange}
          className="full-width"
        />

        <div className="input-grid three-col">

          <div className="input-group">
            <input
              name="city"
              id="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className={errors.city ? "error-input" : ""}
            />

            <p className="error-space">
              {errors.city || ""}
            </p>
          </div>

          <div className="input-group">
            <input
              name="state"
              id="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
            />

            {errors.state && (
              <p className="error-text">{errors.state}</p>
            )}
          </div>
        </div>

        <input
          name="pinCode"
          id="pinCode"
          placeholder="PIN code"
          value={form.pinCode}
          onChange={handlePincodeChange}
        />

        {errors.pinCode && (
          <p className="error-text">{errors.pinCode}</p>
        )}

        <input
          name="phone"
          id="phone"
          onBlur={handleBlur}
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        {errors.phone && (
          <p className="error-text">{errors.phone}</p>
        )}
      </section>
    </>
  );
}

export default CheckoutForm;