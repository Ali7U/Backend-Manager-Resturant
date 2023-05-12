import express, { Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import userRouter from "./routers/user.routes";
import foodRouter from "./routers/food.routes";
import orderRouter from "./routers/order.routes";
const app: Application = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connectDB();

// Routers
app.use("/users", userRouter);
app.use("/foods", foodRouter);
app.use("/order", orderRouter);

app.listen(PORT, () => console.log(`Server is up on PORT ${PORT}`));
