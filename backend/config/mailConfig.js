import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

transporter.verify((error) => {
    if (error) {
        console.log("MAIL ERROR =>", error);
    } else {
        console.log("MAIL SERVER READY");
    }
});

export default transporter;