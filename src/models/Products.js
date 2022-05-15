
const searchProductsById = async(id)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/products/product_search?id=${id}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}

const searchProductsByCategory = async(category)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/products/product_search?primary_category_id=${category}&secretKey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}
  
export default { searchProductsById, searchProductsByCategory };