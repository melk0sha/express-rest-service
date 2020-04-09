const uuid = require("uuid");

class Task {
  constructor({
    id = uuid(),
    title = "Task title",
    order = 0,
    description = "Task description",
    userId = null,
    boardId = null,
    columnId = null
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
