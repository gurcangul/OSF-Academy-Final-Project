
const getCategoryById = async(id)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/categories/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    } 
}

const getCategoryByParentId = async(id)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/categories/parent/${id}?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}
const getAllCategory= async ()=> {
    try {
        const response = await fetch(`https://backend-academy-osf.herokuapp.com`+`/api/categories?secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}  
export default { getCategoryById, getCategoryByParentId, getAllCategory };