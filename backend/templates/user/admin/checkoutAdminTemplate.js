const checkoutAdminTemplate = (data) => {

    return `

        <div style="font-family:Arial;padding:20px;">

            <h2>New Order Received</h2>

            <p><strong>Customer:</strong> ${data.name}</p>

            <p><strong>Email:</strong> ${data.email}</p>

            <p><strong>Phone:</strong> ${data.phone}</p>

            <p><strong>Order ID:</strong> ${data.orderId}</p>

            <p><strong>Total:</strong> ₹${data.total}</p>

            <p><strong>Payment:</strong> ${data.paymentMode}</p>

        </div>
    `;
};

export default checkoutAdminTemplate;