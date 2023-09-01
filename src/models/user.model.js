// Estructura de la base de datos
import mongoose from "mongoose";

//esquema de la base de datos
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,// necesario que sea diligenciado
        trim: true // limpiar los espacios
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('User', userSchema)