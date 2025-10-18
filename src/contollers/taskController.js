import express from "express";
import { taskService } from "../services/taskService.js";

const router = express.Router();

// Crear tarea
router.post("/", (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = taskService.create(title, description, dueDate);
  res.status(201).json(task);
});

// Listar todas las tareas
router.get("/", (req, res) => {
  const tasks = taskService.list();
  res.json(tasks);
});

// Actualizar estado
router.patch("/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = taskService.updateStatus(id, status);
  if (!updated) return res.status(404).json({ message: "Tarea no encontrada" });
  res.json(updated);
});

// Eliminar tarea
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  taskService.delete(id);
  res.status(204).send();
});

// Listar vencidas

export default router;
