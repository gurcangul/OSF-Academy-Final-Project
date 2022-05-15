import express from 'express'
import { getCategoryById, getCategoryByParentId, getAllCategory } from '../controllers/categoriesController.js'

const router = express.Router()

router.get("/category/:id", getCategoryById);
router.get("/category/parent/:id", getCategoryByParentId);
router.get("/all_categories", getAllCategory);

export default router;