import express from 'express'
import { getWishlist, addItemToWishlist, removeItemFromWishlist, ​changeQuantityOfItem } from '../controllers/cartController.js'

const router = express.Router()

router.post("/cart/getCart", getWishlist);
router.post("/wishlist/addItem", addItemToWishlist);
router.delete("/wishlist/removeItem", removeItemFromWishlist);
router.post("/wishlist/changeItemQuantity", ​changeQuantityOfItem);

export default router;