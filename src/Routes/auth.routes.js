import express from 'express'
import { signUp, signIn } from '../controllers/auth.controller.js'

const router = express.Router()

router.post("/auth/signup", signUp);
router.post("/auth/signin", signIn);

export default router; 