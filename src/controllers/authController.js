import Auth from '../models/Auth.js';
//import {signUp, signIn} from '../models/Auth.js';

  const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const result = await Auth.signUp(name, email, password);
    return res.json(result);
 }
 
 const signIn = async(req, res) => {
    const { email, password } = req.body;
    const result = await Auth.signIn(email, password);
    return res.json(result);
 }
 
export { signUp, signIn };
 