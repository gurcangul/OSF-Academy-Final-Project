import express from 'express'
import { getCart, addItemToCart, removeItemFromCart } from '../controllers/cart.controller.js'

const router = express.Router()

router.get("/cart/:token", async function(req, res) {
    const cart = await getCart(req, res);
    res.render("../views/cart.ejs", {cart});
});

router.post("/cart/addItem", addItemToCart);
router.delete("/cart/removeItem", removeItemFromCart);

export default router;