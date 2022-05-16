const getOrder = async(id)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/cart/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    } 
}

const createOrder = async(id)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/cart/addItem/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}

export default { getOrder, createOrder }