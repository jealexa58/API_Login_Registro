import {z} from 'zod';
//Esquema de validación para el registro
export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required",
    }),
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "Invalid email address",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, {
        message: "Password must be at least 6 characters",
    }),
});

//Esquema de validación para el login

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "Invalid email address",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, {
        message: "Password must be at least 6 characters",
    }),
});