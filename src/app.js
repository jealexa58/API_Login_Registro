//REF:https://www.youtube.com/watch?v=NmkY4JgS21A
//para el arranque de express
import express from "express";
import morgan from "morgan";
import apiRoutes from "./routes/api.routes.js";
import dateRoutes from "./routes/date.routes.js";
import cookieParser from "cookie-parser";


const app= express();

app.use(morgan('dev'));
app.use(express.json()); // Para que express permita leer los request de formato json en js
app.use(cookieParser()); 

app.use("/api",apiRoutes);
app.use("/api/",dateRoutes); 

export default app;
