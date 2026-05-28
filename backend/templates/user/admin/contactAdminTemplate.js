const contactAdminTemplate = (data) => {

    const {
        name,
        email,
        phone,
        location,
        projectDetails,
        budget,
        timeline,
        hasContractor,
        referral
    } = data;

    return `

        <div style="font-family:Arial;padding:30px;background:#f5f5f5;">

            <div style="
                max-width:650px;
                margin:auto;
                background:white;
                padding:30px;
                border-radius:12px;
            ">

                <h1 style="color:#111;">
                    New Contact Form Submission
                </h1>

                <p>
                    A new user has submitted the consultation form.
                </p>

                <hr style="margin:20px 0;" />

                <p><strong>Name:</strong> ${name || "-"}</p>

                <p><strong>Email:</strong> ${email || "-"}</p>

                <p><strong>Phone:</strong> ${phone || "-"}</p>

                <p><strong>Location:</strong> ${location || "-"}</p>

                <p><strong>Project Details:</strong> ${projectDetails || "-"}</p>

                <p><strong>Budget:</strong> ${budget || "-"}</p>

                <p><strong>Timeline:</strong> ${timeline || "-"}</p>

                <p><strong>Contractor:</strong> ${hasContractor || "-"}</p>

                <p><strong>Referral:</strong> ${referral || "-"}</p>

            </div>

        </div>

    `;
};

export default contactAdminTemplate;