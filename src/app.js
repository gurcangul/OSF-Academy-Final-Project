import express from 'express'
import dotenv from 'dotenv'
import path from 'path';
import {fileURLToPath} from 'url';

import authRouter from './routes/auth.routes.js'
import indexRouter from './routes/index.routes.js'
import cartRouter from './routes/cart.routes.js'

/*import categoriesRouter from './routes/categories.routes.js'
import ordersRouter from './routes/order.routes.js'
import productsRouter from './routes/product.routes.js'
import wishlistRouter from './routes/wishlist.routes.js'
*/

const app = express();
dotenv.config();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  
app.set('views', __dirname + '/views');
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(authRouter);
app.use(indexRouter);
app.use(cartRouter);

/*
app.use(categoriesRouter);
app.use(ordersRouter);
app.use(productsRouter);
app.use(wishlistRouter);
*/
export default app