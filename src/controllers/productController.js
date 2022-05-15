import Products from '../models/Product.js';

const searchProductsById = async (req, res) => {
   const { id } = req.params;
   const result = await Products.searchProductsById(id);
   return result;
}
 
const searchProductsByCategory= async(req, res) => {
   const { category } = req.params;
   const result = await Products.searchProductsByCategory(category);
   return result;
 }
 
export { searchProductsById, searchProductsByCategory };
 