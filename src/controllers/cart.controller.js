import Cart from '../models/Cart.js';

const getCart = async (req, res) => {
   const { token } = req.params;
   const result = await Cart.getCart(token);
   return result;
}
 
const addItemToCart= async(req, res) => {
  const { productId, variantId, quantity } = req.body;
  const { token } = req.headers;
  const result = await Cart.addItemToCart(productId, variantId, quantity, token);
  return res.json(result);
 }

const removeItemFromCart= async(req, res) => {
   const { productId, variantId } = req.body;
   const { token } = req.headers;
   const result = await Cart.removeItemFromCart(productId, variantId, token);
   return res.json(result);
 }
  
 

export { getCart, addItemToCart, removeItemFromCart };
 