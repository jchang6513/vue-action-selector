export default class TaskActions {
  constructor(repo) {
    this.repo = repo;
  }

  toggleTask(task) {
    const { success, task: newTask } = this.repo.toggleTask(task);

    if (success) {
      return newTask;
    } else {
      throw new Error('toggle failed');
    }
  }

  deleteTask(task) {
    const { success } = this.repo.deleteTask(task);

    if (success) {
      return task;
    } else {
      throw new Error('delete failed');
    }
  }
}
