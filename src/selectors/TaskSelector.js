export default class TaskSelector {
  label(task) {
    return task.label;
  }

  value(task) {
    return String(task.value);
  }

  checked(task) {
    return task.checked;
  }
}
