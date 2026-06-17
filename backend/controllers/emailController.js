import fs from "fs";
import transporter from "../config/mailConfig.js";

import contactUserTemplate from "../templates/user/contactUserTemplate.js";
import homeUserTemplate from "../templates/user/homeUserTemplate.js";
import checkoutUserTemplate from "../templates/user/checkoutUserTemplate.js";

import contactAdminTemplate from "../templates/user/admin/contactAdminTemplate.js";
import homeAdminTemplate from "../templates/user/admin/homeAdminTemplate.js";
import checkoutAdminTemplate from "../templates/user/admin/checkoutAdminTemplate.js";

export const sendEmail = async (req, res) => {

    console.log("API HIT");

    const data = req.body;

    const attachments = (req.files || []).map((file) => ({
        filename: file.originalname,
        path: file.path,
    }));
    console.log("BODY =>", req.body);
    console.log("FILES =>", req.files);
    console.log("REQ BODY =>", data);

    try {

        if (!data.email) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }

        if (data.type === "home") {

            await transporter.sendMail({

                from: `"Indoor Store" <${process.env.EMAIL}>`,

                to: data.email,

                subject: "Welcome to Indoor Studio – Your Design Journey Starts Here",

                html: homeUserTemplate(data)
            });

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.ADMIN_EMAIL,
                subject: "New Home Consultation Request",

                html: homeAdminTemplate(data),

                attachments,
            });

            attachments.forEach((file) => {
                fs.unlinkSync(file.path);
            });
        }

        else if (data.type === "contact") {

            await transporter.sendMail({

                attachments: [
                    {
                        filename: "logo.png",
                        path: "./assets/logo.png",
                        cid: "indoorlogo"
                    }
                ],

                from: `"Indoor Store" <${process.env.EMAIL}>`,

                to: data.email,

                subject: "Thank You for Contacting Indoor Design Studio",

                html: contactUserTemplate(data)
            });

            await transporter.sendMail({

                from: `"Indoor Store" <${process.env.EMAIL}>`,

                to: process.env.ADMIN_EMAIL,

                subject: "New Contact Form Submission",

                html: contactAdminTemplate(data)
            });
        }

        else if (data.type === "checkout") {

            await transporter.sendMail({

                attachments: [
                    {
                        filename: "logo.png",
                        path: "./assets/logo.png",
                        cid: "indoorlogo"
                    }
                ],

                from: `"Indoor Store" <${process.env.EMAIL}>`,

                to: data.email,

                subject: `Order Confirmed - ${data.orderId} | Indoor`,

                html: checkoutUserTemplate(data)
            });

            await transporter.sendMail({

                from: `"Indoor Store" <${process.env.EMAIL}>`,

                to: process.env.ADMIN_EMAIL,

                subject: `New Order - ${data.orderId}`,

                html: checkoutAdminTemplate(data)
            });
        }

        else {
            return res.status(400).json({
                success: false,
                message: "Invalid email type"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Emails Sent Successfully"
        });

    } catch (error) {

        console.log("FULL ERROR =>", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};