import express from 'express'
import { searchProductsById, searchProductsByCategory} from '../controllers/product.controller'

const router = express.Router()

router.get("/product/:id", async function (req, res) {
    const product =  await searchProductsById(req, res);
    res.render("../public/views/product.ejs", {product});
});

router.get("/products_on_category/:category", async function(req, res){
    const products = await searchProductsByCategory(req, res);
    res.render("../public/views/categories.ejs", {products});
});
router.get("/search_result/:key_word", async function(req, res){
    const products = await productsController.searchProducts(req, res);
    res.render("../public/views/search.ejs", {products});
});

router.get("/getProduct/:id", productsController.getProduct);
export default router;