export default class TodoListActions {
  constructor(repo) {
    this.repo = repo;
  }

  getTodoList() {
    try {
      return this.repo.getTodoList();
    } catch(e) {
      throw new Error('get failed')
    }
  }

  createTask(label) {
    try {
      return this.repo.createTask(label);
    } catch(e) {
      throw new Error('create failed');
    }
  }

  toggleTask(task) {
    try {
      return this.repo.toggleTask(task);
    } catch(e) {
      throw new Error('toggle failed');
    }
  }

  deleteTask(task) {
    try {
      return this.repo.deleteTask(task);
    } catch(e) {
      throw new Error('delete failed');
    }
  }
}
