import express from 'express'
import { getCart, addItemToCart, removeItemFromCart,​changeQuantityOfItem } from '../controllers/cartController.js'

const router = express.Router()

router.get("/cart/:token", async function(req, res) {
    const cart = await cartController.getCart(req, res);
    res.render("../views/cart.ejs", {cart});
});
router.post("/cart/addItem", addItemToCart);
router.delete("/cart/removeItem", removeItemFromCart);
router.post("/cart/changeItemQuantity", ​changeQuantityOfItem);

export default router;