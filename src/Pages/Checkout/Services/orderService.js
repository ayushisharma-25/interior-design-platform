export const createOrder = async ({
    form,
    cart,
    grandTotal,
    paymentMethod,
    shippingFinal,
    selectedShipping,
    subtotal,
    tax,
    discountAmount,
    appliedDiscount,
    onlineMethod,
}) => {

    const fakePaymentId = "pay_" + Date.now();

    await new Promise((res) =>
        setTimeout(res, 500)
    );

    const shippingDays = Number(selectedShipping?.days ?? 3);
    const shippingMethod = selectedShipping?.method ?? "Standard Delivery";

    const startDate = new Date();
    startDate.setDate(startDate.getDate() + shippingDays);

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + shippingDays + 2);

    const deliveryEstimate =
        `${startDate.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
        })} - ${endDate.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })}`;
    const orderId = "ORD_" + Date.now();

    const order = {
        id: orderId,
        orderId: orderId,

        paymentId: fakePaymentId,

        createdAt: Date.now(),

        orderDate: new Date().toLocaleDateString(),

        orderTime: new Date().toLocaleTimeString(),

        firstName: form.firstName,
        lastName: form.lastName,

        email: form.email,
        phone: form.phone,

        address: form.address,
        city: form.city,
        state: form.state,
        pinCode: form.pinCode,

        total: grandTotal,

        subtotal: subtotal,

        tax: tax,

        discount: discountAmount,

        shipping: shippingFinal,

        paymentMode: paymentMethod,

        paymentStatus:
            paymentMethod === "cod"
                ? "Pending"
                : "Paid",

        cart: cart,

        estimatedDelivery: deliveryEstimate,

        shippingDays,

        shippingMethod: shippingMethod,

        shippingPrice: shippingFinal,
    };

    const existingOrders =
        JSON.parse(localStorage.getItem("allOrders")) || [];

    const updatedOrders = [order, ...existingOrders];

    localStorage.setItem(
        "allOrders",
        JSON.stringify(updatedOrders)
    );

    // await fetch("http://localhost:5000/send-email", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         type: "checkout",

    //         id: order.id,
    //         paymentId: fakePaymentId,

    //         name: `${form.firstName} ${form.lastName}`,
    //         email: form.email,
    //         phone: form.phone,

    //         address: form.address,
    //         city: form.city,
    //         state: form.state,
    //         pinCode: form.pinCode,

    //         apartment: "",

    //         paymentMode: paymentMethod,
    //         onlineMethod,

    //         subtotal,
    //         shipping: shippingFinal,

    //         shippingMethod: selectedShipping?.method,
    //         shippingDays,

    //         tax,
    //         discount: discountAmount,
    //         total: grandTotal,

    //         couponCode: appliedDiscount?.code || null,
    //         discountAmount: discountAmount || 0,

    //         orderId: order.id,

    //         estimatedDelivery: deliveryEstimate,

    //         items: cart,

    //         orderDate: new Date().toLocaleDateString("en-IN", {
    //             day: "2-digit",
    //             month: "long",
    //             year: "numeric",
    //         }),
    //     }),
    // });

    try {

        await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                type: "checkout",

                id: order.id,
                paymentId: fakePaymentId,

                name: `${form.firstName} ${form.lastName}`,
                email: form.email,
                phone: form.phone,

                address: form.address,
                city: form.city,
                state: form.state,
                pinCode: form.pinCode,

                apartment: "",

                paymentMode: paymentMethod,
                onlineMethod,

                subtotal,
                shipping: shippingFinal,

                shippingMethod: selectedShipping?.method,
                shippingDays,

                tax,
                discount: discountAmount,
                total: grandTotal,

                couponCode: appliedDiscount?.code || null,
                discountAmount: discountAmount || 0,

                orderId: order.id,

                estimatedDelivery: deliveryEstimate,

                items: cart,

                orderDate: new Date().toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }),
            }),
        });

    } catch (err) {

        console.log("Email sending failed:", err);

    }

    return order;
};