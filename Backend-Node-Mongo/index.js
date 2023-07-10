import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT,()=>{
    console.log(`Super Server web listening on port ${PORT}`);
})