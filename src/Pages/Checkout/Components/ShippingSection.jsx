import shippingOptions from "../Data/shippingOptions";


function ShippingSection({
  selectedShipping,
  setSelectedShipping,
}) {
  return (
    <section className="address-section">
      <h2>Shipping Method</h2>

      <div className="shipping-section">
        {shippingOptions.map((option) => (
          <label
            key={option.id}
            className="shipping-option"
          >
            <input
              type="radio"
              name="shipping"
              checked={selectedShipping?.id === option.id}
              onChange={() => setSelectedShipping(option)}
            />

            <span>
              {option.method} - ₹{option.price} (
              {option.label || `${option.days} Days`})
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}

export default ShippingSection;