export const calculateSubtotal = (cart) => {
  return cart.reduce(
    (acc, item) =>
      acc + item.price * (item.qty || 1),
    0
  );
};

export const calculateTax = (
  subtotal,
  taxRate = 0.18
) => {
  return Math.round(subtotal * taxRate);
};

export const calculateDiscount = (
  subtotal,
  appliedDiscount
) => {

  if (!appliedDiscount) {
    return 0;
  }

  if (appliedDiscount.type === "percent") {
    return Math.round(
      (subtotal * appliedDiscount.value) / 100
    );
  }

  if (appliedDiscount.type === "flat") {
    return appliedDiscount.value;
  }

  return 0;
};

export const calculateShipping = (
  selectedShipping,
  appliedDiscount
) => {

  if (
    appliedDiscount?.type === "shipping"
  ) {
    return 0;
  }

  return selectedShipping.price;
};

export const calculateGrandTotal = ({
  subtotal,
  shipping,
  tax,
  discount,
}) => {

  return Math.max(
    0,
    subtotal +
      shipping +
      tax -
      discount
  );
};