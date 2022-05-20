import express from 'express'
import { getCategoryById, getCategoryByParentId, getAllCategories } from '../controllers/categoriesController.js'

const router = express.Router()

router.get("/all_categories", (req, res) => {
    res.render("../views/categories.ejs");
  });

export default router;