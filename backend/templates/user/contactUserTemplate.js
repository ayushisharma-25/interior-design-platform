const contactUserTemplate = (data) => {

    const {
        name,
        location,
        projectDetails,
        budget,
        timeline,
        hasContractor,
        referral
    } = data;

    return `

        <div style="margin:0;padding:0;background:#f7f7f7;font-family:Arial,sans-serif;">

            <div style="
                background:#111111;
                padding:35px 30px;
                text-align:center;
            ">

                <div style="text-align:center; margin-bottom:18px;">
                    <img 
                        src="cid:indoorlogo"
                        alt="Indoor Logo"
                        style="
                            width:90px;
                            height:auto;
                            display:block;
                            margin:0 auto 12px;
                        "
                    />
                </div>

                <h1 style="
                    margin:0;
                    font-size:34px;
                    color:#ffffff;
                    letter-spacing:4px;
                ">
                    INDOOR
                </h1>

                <p style="
                    margin-top:10px;
                    color:#f4a623;
                    font-size:14px;
                    letter-spacing:1px;
                ">
                    Make Your Home Pinterest Famous
                </p>
            </div>

            <!-- Body -->
            <div style="padding:38px 32px;color:#333333;">

                <p style="font-size:16px;line-height:1.8;margin-top:0;">
                    Dear <strong>${name}</strong>,
                </p>

                <p style="font-size:15px;line-height:1.8;color:#555;">
                    Thank you for taking the time to share your project details with
                    <strong>Indoor Interior Design Studio</strong>.
                </p>

                <p style="font-size:15px;line-height:1.8;color:#555;">
                    We’re excited to learn more about your home and truly appreciate
                    the opportunity to be part of your design journey.
                </p>

                <p style="font-size:15px;line-height:1.8;color:#555;">
                    Your consultation request has been successfully received, and our
                    team is currently reviewing the information you submitted.
                </p>

                <!-- Project Summary -->
                <div style="
                    background:#fafafa;
                    border:1px solid #ececec;
                    border-left:4px solid #f4a623;
                    padding:22px;
                    border-radius:10px;
                    margin:28px 0;
                ">

                    <h3 style="
                        margin-top:0;
                        margin-bottom:16px;
                        color:#111111;
                        font-size:18px;
                    ">
                        Project Summary
                    </h3>

                    <p style="margin:8px 0;">
                        <strong>Client Name:</strong> ${name || "-"}
                    </p>

                    <p style="margin:8px 0;">
                        <strong>Project Location:</strong> ${location || "-"}
                    </p>

                    <p style="margin:8px 0;">
                        <strong>Project Scope:</strong> ${projectDetails || "-"}
                    </p>

                    <p style="margin:8px 0;">
                        <strong>Budget Preference:</strong> ${budget || "-"}
                    </p>

                    <p style="margin:8px 0;">
                        <strong>Expected Timeline:</strong> ${timeline || "-"}
                    </p>

                    <p style="margin:8px 0;">
                        <strong>Contractor Status:</strong> ${hasContractor || "-"}
                    </p>

                    <p style="margin:8px 0;">
                        <strong>Referred Via:</strong> ${referral || "-"}
                    </p>

                </div>

                <p style="font-size:15px;line-height:1.8;color:#555;">
                    Your project details and design preferences will help our team better
                    understand your vision, style, and functional requirements before we connect with you.
                </p>

                <h3 style="
                    font-size:18px;
                    color:#111111;
                    margin-top:28px;
                    margin-bottom:12px;
                ">
                    Our designer will discuss with you:
                </h3>

                <ul style="
                    padding-left:20px;
                    color:#555;
                    font-size:15px;
                    line-height:1.9;
                ">
                    <li>Design direction & inspirations</li>
                    <li>Space planning ideas</li>
                    <li>Material & finish preferences</li>
                    <li>Budget alignment</li>
                    <li>Consultation scheduling</li>
                </ul>

                <div style="text-align:center;margin:35px 0 20px;">
                    <a href="https://google.com"
                        style="
                            background:#111111;
                            color:#ffffff;
                            text-decoration:none;
                            padding:14px 28px;
                            border-radius:8px;
                            font-weight:bold;
                            display:inline-block;
                        ">
                        Explore Our Studio
                    </a>
                </div>

                <p style="
                    font-size:15px;
                    line-height:1.8;
                    color:#555;
                ">
                    At Indoor, we believe every home should feel intentional,
                    elegant, and deeply personal — and we’re looking forward
                    to creating that experience with you.
                </p>

                <p style="margin-top:28px;font-size:15px;">
                    Warm Regards,<br/>
                    <strong>Team Indoor ✨</strong><br/>
                    Interior Design Studio
                </p>

            </div>

            <!-- Footer -->
            <div style="
                background:#111111;
                color:#bbbbbb;
                text-align:center;
                padding:18px;
                font-size:12px;
            ">
                © ${new Date().getFullYear()} INDOOR | Make Your Home Pinterest Famous
            </div>

        </div>
    `;
};

export default contactUserTemplate;