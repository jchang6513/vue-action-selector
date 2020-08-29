export default class TodoListRepository {
  getTodoList() {
    return this.getData();
  }

  createTask(label) {
    const todoList = [
      ...this.getData(),
      {
        label,
        checked: false,
        value: Date.parse(new Date())
      }
    ]
    this.setData(todoList);
    return todoList;
  }

  toggleTask(task) {
    const todoList = this.getData().map(t =>
      t.value === task.value
        ? { ...task, checked: !task.checked }
        : t
    );
    this.setData(todoList);
    return todoList;
  }

  deleteTask(task) {
    const todoList = this.getData().filter(t => t.value !== task.value);
    this.setData(todoList);
    return todoList;
  }

  getData() {
    return JSON.parse(localStorage.getItem('todoList'))
  }

  setData(todoList) {
    return localStorage.setItem('todoList', JSON.stringify(todoList))
  }
}
