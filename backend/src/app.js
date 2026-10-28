import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());

app.get("/welcome", (req, res) => {
    res.send("Welcome! This is OJ Project backend.")
});

export default app;