import fetch from "node-fetch";

const getCart = async(token)=>{
    token = token.replace(/\"/g, "");
    try {
      const response = await fetch(`${process.env.API_URL}/cart?secretKey=${process.env.API_KEY}`,
        {
            method: "GET",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`,},
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
        console.log(err);
    }
  }

const addItemToCart = async(productId, variantId, quantity, token)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/cart/addItem`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            secretKey: process.env.API_KEY,
            productId: productId,
            variantId: variantId,
            quantity: quantity,
          }),
        });
        const data = await response.json();
        return data;
      } catch(err) {
        console.log(err);
    }
}

const removeItemFromCart = async (productId, variantId, token) => {
    try {
        await fetch(`${process.env.API_URL}/cart/removeItem`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            secretKey: process.env.API_KEY,
            productId: productId,
            variantId: variantId,
          }),
        });
        return {
          status: "Item removed from the cart",
        };
      }catch(err) {
        console.log(err);
    }
} 



export default { getCart, addItemToCart, removeItemFromCart }