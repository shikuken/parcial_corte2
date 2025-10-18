import { TaskStatus } from "./taskStatus.js";

export class Task {
  constructor(id, title, description = "", dueDate = null, status = TaskStatus.PENDING) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
  }
}
