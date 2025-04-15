import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import chatRoute from "./routes/chat.route.js";

const app = express();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://aitutorapp.netlify.app",
  })
);
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/chat", chatRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
