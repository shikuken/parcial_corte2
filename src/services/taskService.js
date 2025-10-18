import { inMemoryRepo } from "../repositories/inMemoryTaskRepository.js";
import { Task } from "../models/task.js";

class TaskService {
  create(title, description, dueDate) {
    const newTask = new Task(null, title, description, dueDate);
    return inMemoryRepo.save(newTask);
  }

  list() {
    return inMemoryRepo.findAll();
  }

  updateStatus(id, status) {
    return inMemoryRepo.updateStatus(id, status);
  }

  delete(id) {
    return inMemoryRepo.delete(id);
  }
}

export const taskService = new TaskService();
