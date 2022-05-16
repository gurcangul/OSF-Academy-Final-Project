import Wishlist from '../models/Wishlist';

const getWishlist = async (req, res) => {
   const { id } = req.params;
   const result = await Wishlist.getWishlist(id);
   return res.json(result);
}
 
const addItemToWishlist = async(req, res) => {
   const { id } = req.params;
   const result = await Wishlist.addItemToWishlist(id);
   return res.json(result);
 }

const removeItemFromWishlist = async(req, res) => {
  const result = await Wishlist.removeItemFromWishlist();
  return res.json(result);
 }
  
const ​changeQuantityOfItem = async(req, res) => {
    const result = await Wishlist.​changeQuantityOfItem();
    return res.json(result);
}  

export { getWishlist, addItemToWishlist, removeItemFromWishlist, ​changeQuantityOfItem };
 