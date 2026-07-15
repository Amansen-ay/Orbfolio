import express from "express";
import userRouter from './interfaces/http/user/userRoutes.js';

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Orbfolio API is running"
    });
});
app.use('/users',userRouter)

export default app;