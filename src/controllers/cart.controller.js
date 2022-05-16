import Cart from '../models/Cart.js';

const getCart = async (req, res) => {
   const { id } = req.params;
   const result = await Cart.getCart(id);
   return res.json(result);
}
 
const addItemToCart= async(req, res) => {
   const { id } = req.params;
   const result = await Cart.addItemToCart(id);
   return res.json(result);
 }

const removeItemFromCart= async(req, res) => {
  const result = await Cart.removeItemFromCart();
  return res.json(result);
 }
  
const ​changeQuantityOfItem = async(req, res) => {
    const result = await Cart.​changeQuantityOfItem();
    return res.json(result);
}  

export { getCart, addItemToCart, removeItemFromCart,​changeQuantityOfItem };
 