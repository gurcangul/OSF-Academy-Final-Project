import express from 'express'
import { getWishlist, addItemToWishlist, removeItemFromWishlist, ​changeQuantityOfItem } from '../controllers/cartController.js'

const router = express.Router()

router.get("/wishlist/:token", async function(req, res) {
    const wishlist = await getWishlist(req, res);
    res.render("../views/wishlist.ejs", {wishlist});
});
router.post("/wishlist/addItem", addItemToWishlist);
router.delete("/wishlist/removeItem", removeItemFromWishlist);
router.post("/wishlist/changeItemQuantity", ​changeQuantityOfItem);

export default router;