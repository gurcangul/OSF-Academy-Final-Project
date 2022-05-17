import express from 'express'
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';

import authRouter from './routes/auth.routes.js'
import indexRouter from './routes/index.routes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();
app.use(express.json());

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.use(authRouter)
app.use(indexRouter)



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`))