import express from 'express'
import { getCart, addItemToCart, removeItemFromCart,​changeQuantityOfItem } from '../controllers/cartController.js'

const router = express.Router()

router.post("/cart/getCart", getCart);
router.post("/cart/addItem", addItemToCart);
router.delete("/cart/removeItem", removeItemFromCart);
router.post("/cart/changeItemQuantity", ​changeQuantityOfItem);

export default router;