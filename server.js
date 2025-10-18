import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import taskRouter from "./src/contollers/taskController.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/tasks", taskRouter);

// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`));
