import express from 'express'
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js'

const app = express()
app.use(express.json());

app.use(authRouter);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))