import express from "express";
import multer from "multer";
import { sendEmail } from "../controllers/emailController.js";

const router = express.Router();

const upload = multer({
    dest: "uploads/",
});

router.post(
    "/send-email",
    upload.array("images"),
    sendEmail
);

export default router;