import express from 'express'
import { getOrders, createOrder } from '../controllers/orderController.js'

const router = express.Router()

router.post("/orders", getOrders);
router.post("/orders/create", createOrder);

export default router;