import Order from '../models/Order.js';

const getOrder = async (req, res) => {
    const { id } = req.params;
    const result = await Order.Order(id);
    return res.json(result);
 }
 
const createOrder= async(req, res) => {
   const { category } = req.params;
   const result = await Products.createOrder(category);
   return result;
 }
 
export { getOrder, createOrder };
 