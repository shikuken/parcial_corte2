import { Task } from "../models/task.js";

class InMemoryTaskRepository {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  save(task) {
    task.id = this.nextId++;
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findById(id) {
    return this.tasks.find(t => t.id === Number(id));
  }

  updateStatus(id, status) {
    const task = this.findById(id);
    if (task) {
      task.status = status;
      return task;
    }
    return null;
  }

  delete(id) {
    this.tasks = this.tasks.filter(t => t.id !== Number(id));
  }
}

export const inMemoryRepo = new InMemoryTaskRepository();
