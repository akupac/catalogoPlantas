import express from "express";
import cors from "cors";
import "dotenv/config";
import plantaController from './controller/plantaController.js';
// import "./repository/connection.js"

const servidor = express();

servidor.use(cors());
servidor.use(express.json())
servidor.use(plantaController);

servidor.listen(process.env.PORT, ()=> console.log("Hello, world!\n\n\n\t\tAPI SUBIU\n\n\n\t\t"))