import fetch from "node-fetch";

const signUp = async(name, email, password)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                secretKey: process.env.API_KEY,
                name: name,
                email: email,
                password: password,
            }),
        });
        
        const data = await response.json();
        res.cookie('token', response.data.token, { httpOnly: true, secure: true, maxAge: 3600000 });
        res.cookie('user', {
            name: response.data.user.name,
            email: response.data.user.email,
            createdAt: response.data.user.createdAt,
        }, { httpOnly: true, secure: true, maxAge: 3600000 });
        return data;
    } catch (err) {
        console.log(err);
    } 
}

const signIn = async(email, password)=>{
    try {
        const response = await fetch(`${process.env.API_URL}/auth/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                secretKey: process.env.API_KEY,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();        
        return data;
    } catch (err) {
        console.log(err);
    }
}


export default { signUp, signIn };