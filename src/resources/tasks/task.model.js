const uuid = require("uuid");

class Task {
  constructor({
    id = uuid(),
    title = "Task title",
    order,
    description = "Task description",
    userId, // assignee
    boardId,
    columnId
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
