const homeAdminTemplate = (data) => {

    return `

        <div style="font-family:Arial;padding:20px;">

            <h2>New Home Consultation Request</h2>

            <p><strong>Name:</strong> ${data.name || "-"}</p>

            <p><strong>Email:</strong> ${data.email || "-"}</p>

            <p><strong>Phone:</strong> ${data.phone || "-"}</p>

        </div>
    `;
};

export default homeAdminTemplate;