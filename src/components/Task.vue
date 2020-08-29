<template>
  <div id="Task">
    <input
      type="checkbox"
      :id="selector.value(task)"
      :checked="selector.checked(task)" @
      @click="() => toggle(task)"
    >
    <label :for="selector.value(task)">{{ selector.label(task) }}</label>
    <button @click="() => remove(task)">X</button>
  </div>
</template>

<script>
import TaskSelector from "../selectors/TaskSelector";

export default {
  name: "Task",
  props: {
    selector: TaskSelector,
    task: Object,
    toggle: Function,
    remove: Function,
  },
};
</script>

<style>
  #Task {
    font-size: 24px;
    margin: 10px;
  }
</style>
