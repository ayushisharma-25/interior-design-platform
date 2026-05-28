export const createMyOrderData = ({
    form,
    paymentMethod,
    shippingFinal,
    selectedShipping,
    tax,
    subtotal,
    cart,
    grandTotal,
}) => {

    const orderDate = new Date();

    const minDate = new Date();
    minDate.setDate(orderDate.getDate() + 2);

    const maxDate = new Date();
    maxDate.setDate(orderDate.getDate() + 5);

    const estimatedDelivery = `${minDate.toLocaleDateString(
        "en-IN"
    )} - ${maxDate.toLocaleDateString("en-IN")}`;

    const now = new Date();

    return {
        orderId: "IND" + Date.now(),

        orderDate: now.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }),

        orderTime: now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
        }),

        createdAt: now.getTime(),

        estimatedDelivery,

        paymentStatus: paymentMethod === "cod" ? "Pending" : "Paid",
        paymentMode: paymentMethod,

        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        state: form.state,
        pinCode: form.pinCode,

        shipping: shippingFinal,
        shippingMethod: selectedShipping.method,
        shippingDays: selectedShipping.days,
        tax,
        subtotal,
        items: [...cart],
        total: grandTotal,
    };
};