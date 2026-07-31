import express from "express";
import userRouter from './interfaces/http/user/userRoutes.js';
import linkRouter from './interfaces/http/links/linkRoutes.js'; 
import cors from "cors";
import { errorMiddleware } from "./interfaces/http/middlewares/errorMiddleware.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Orbfolio API is running"
    });
});
app.use('/users',userRouter);
app.use('/links',linkRouter);

app.use(errorMiddleware)

export default app;