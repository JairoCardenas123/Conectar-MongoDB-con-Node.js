import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import CategoriaRouter from "./routes/categorias.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/categoria",CategoriaRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT,()=>{
    console.log(`Super Server web listening on port ${PORT}`);
})