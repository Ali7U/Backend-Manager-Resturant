import express from "express";
import { deleteAllOrders, getOrders, order } from "../controllers/orders.controller";
import validate from "../middleware/validate";
import { orderSchema } from "../zod.schema/zod.order";
import { auth } from "../middleware/Auth";
const router = express.Router()

router.post('/newOrder', auth, validate(orderSchema),order)
router.delete("/d", deleteAllOrders)
router.get('', getOrders)

export default router