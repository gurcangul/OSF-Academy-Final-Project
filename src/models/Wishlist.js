const getWishlist = async(id)=>{
    try {
        const response = await GET(`${process.env.API_URL}/wishlist/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    } 
}

const addItemToWishlist = async(id)=>{
    try {
        const response = await POST(`${process.env.API_URL}/wishlist/addItem/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}

const removeItemFromWishlist = async ()=> {
    try {
        const response = await DELETE(`${process.env.API_URL}/wishlist/removeItem/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
} 

const ​changeQuantityOfItem = async ()=> {
    try {
        const response = await POST(`${process.env.API_URL}/wishlist/changeItemQuantity/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
} 
export default { getWishlist, addItemToWishlist, removeItemFromWishlist,​changeQuantityOfItem }