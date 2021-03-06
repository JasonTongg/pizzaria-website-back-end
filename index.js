import express from "express";
import db from './Database.js';
import productRoutes from "./Router.js";
import messageRoutes from "./MessageRouter.js";
import listRoutes from "./ListRouter.js";
import orderRoutes from "./OrderRouter.js";
import voucherRoutes from "./voucherRouter.js";
import cors from 'cors';

try {
    db.authenticate();
    console.log('Database connected');
} catch (error) {
    console.log('connection error', error);
}

const app = express();
app.use(express.json());
app.use(cors());
app.use('/cart', productRoutes);
app.use('/message', messageRoutes);
app.use('/list', listRoutes);
app.use('/order', orderRoutes);
app.use('/voucher', voucherRoutes);

app.listen(5000, () => console.log("server running at port 5000"));