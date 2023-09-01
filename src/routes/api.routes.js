import { Router } from "express";
import {login, register, logout, profile} from "../controllers/api.controller.js"
import {apiRequired} from  '../middleware/validateToken.js';
import { validateSchema } from "../middleware/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/api.schema.js";



const router = Router()

router.post('/register',validateSchema(registerSchema), register);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile',apiRequired, profile);

export default router
