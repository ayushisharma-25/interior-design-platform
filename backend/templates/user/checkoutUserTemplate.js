const checkoutUserTemplate = (data) => {

    const {
        name,
        orderId,
        total,
        paymentMode
    } = data;

    return `

    <div style="margin:0;padding:0;background:#f7f7f7;font-family:Arial,sans-serif;">

        <div style="
            max-width:680px;
            margin:30px auto;
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
            box-shadow:0 8px 24px rgba(0,0,0,0.08);
        ">

            <div style="background:#111;padding:35px;text-align:center;">

                <h1 style="margin:0;color:white;letter-spacing:4px;">
                    INDOOR
                </h1>

                <p style="color:#f4a623;margin-top:8px;">
                    Make Your Home Pinterest Famous
                </p>
            </div>

            <div style="padding:35px;">

                <p>Dear <strong>${name}</strong>,</p>

                <p>
                    Thank you for shopping with <strong>Indoor</strong>.
                </p>

                <p>
                    Your order has been placed successfully.
                </p>

                <div style="margin:25px 0;">

                    <h3 style="color:#111;">ORDER DETAILS</h3>

                    <p><strong>Order ID:</strong> ${orderId}</p>

                    <p><strong>Payment Method:</strong>
                        ${paymentMode === "cod"
            ? "Cash On Delivery"
            : "Online Payment"}
                    </p>

                    <p style="
                        font-size:18px;
                        color:#f4a623;
                        font-weight:bold;
                    ">
                        Total Amount: ₹${total}
                    </p>

                </div>

                <p style="margin-top:28px;">
                    Warm Regards,<br/>
                    <strong>Team Indoor ✨</strong>
                </p>

            </div>

            <div style="
                background:#111;
                color:#bbb;
                text-align:center;
                padding:18px;
                font-size:12px;
            ">
                © ${new Date().getFullYear()} INDOOR
            </div>

        </div>
    </div>
    `;
};

export default checkoutUserTemplate;