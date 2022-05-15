import Categories from '../models/Categories.js';

const getCategoryById = async (req, res) => {
   const { id } = req.params;
   const result = await Categories.getCategoryById(id);
   return res.json(result);
}
 
const getCategoryByParentId= async(req, res) => {
   const { id } = req.params;
   const result = await Categories.getCategoryByParentId(id);
   return res.json(result);
 }
const getAllCategories= async(req, res) => {
  const result = await Categories.getAllCategories();
  return res.json(result);
 } 

export { getCategoryById, getCategoryByParentId, getAllCategories };
 