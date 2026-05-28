import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import emailRoutes from "./routes/emailRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", emailRoutes);

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});