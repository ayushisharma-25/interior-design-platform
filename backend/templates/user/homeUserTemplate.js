const homeUserTemplate = (data) => {

    const nameSafe = data.name || "User";

    return `

    <div style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">

        <div style="max-width:620px;width:100%;margin:30px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">

            <div style="background:#03033e;padding:32px;text-align:center;">
                <h1 style="margin:0;color:#f9f9eb;font-size:30px;letter-spacing:4px;">
                    INDOOR
                </h1>

                <p style="margin:10px 0 0;color:#d6d6e7;font-size:14px;">
                    Interior Consultation Studio
                </p>
            </div>

            <div style="padding:40px 32px;color:#1f2937;">

                <h2 style="margin-top:0;font-size:25px;color:#03033e;">
                    Thank you, ${nameSafe}
                </h2>

                <p style="font-size:15px;line-height:1.8;color:#4b5563;">
                    We’ve successfully received your consultation request.
                </p>

                <p style="font-size:15px;line-height:1.8;color:#4b5563;">
                    Our design team will review your requirements and contact you shortly.
                </p>

                <div style="
                    background:#f9fafb;
                    border:1px solid #e5e7eb;
                    padding:20px;
                    border-radius:12px;
                    margin:28px 0;
                    text-align:center;
                ">
                    <p style="margin:0;font-size:15px;color:#374151;">
                        Your details have been successfully submitted.
                    </p>
                </div>

                <p style="margin-top:28px;font-size:15px;color:#111827;">
                    Warm regards,<br/>
                    <strong>Team INDOOR</strong>
                </p>

            </div>

            <div style="
                background:#f9fafb;
                text-align:center;
                padding:18px;
                font-size:12px;
                color:#6b7280;
                border-top:1px solid #e5e7eb;
            ">
                © ${new Date().getFullYear()} INDOOR Studio
            </div>

        </div>
    </div>
    `;
};

export default homeUserTemplate;