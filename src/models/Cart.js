const getCart = async(id)=>{
    try {
        const response = await GET(`${process.env.API_URL}/cart/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    } 
}

const addItemToCart = async(id)=>{
    try {
        const response = await POST(`${process.env.API_URL}/cart/addItem/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}

const removeItemFromCart = async ()=> {
    try {
        const response = await DELETE(`${process.env.API_URL}/cart/removeItem/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
} 

const ​changeQuantityOfItem = async ()=> {
    try {
        const response = await POST(`${process.env.API_URL}/cart/changeItemQuantity/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
} 
export default { getCart, addItemToCart, removeItemFromCart, ​changeQuantityOfItem }