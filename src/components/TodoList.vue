<template>
  <div id="TodoList">
    <input v-model="newLabel" @keypress="createTask">
    <Task
      v-for="task in todoList"
      :key="task.value"
      :selector="selector"
      :task="task"
      :toggle="toggleTask"
      :remove="removeTask"
    />
  </div>
</template>

<script>
import TodoListRepository from "../repositories/TodoListRepository";
import TodoListActions from '../actions/TodoListActions'
import TaskSelector from "../selectors/TaskSelector";
import Task from "./Task.vue";

export default {
  name: "TodoList",
  delimiters: ["${", "}"],
  components: {
    Task
  },
  data: function() {
    return {
      newLabel: '',
      repo: undefined,
      actions: undefined,
      selector: undefined,
      todoList: [],
    }
  },
  beforeMount: function() {
    this.repo = new TodoListRepository();
    this.actions = new TodoListActions(this.repo);
    this.selector = new TaskSelector();
    this.todoList = this.actions.getTodoList();
  },
  methods: {
    createTask: function(e) {
      if (e.key === 'Enter') {
        this.todoList = this.actions.createTask(this.newLabel);
        this.newLabel = '';
      }
    },
    toggleTask: function(task) {
      this.todoList = this.actions.toggleTask(task);
    },
    removeTask: function(task) {
      this.todoList = this.actions.deleteTask(task);
    },
  }
};
</script>

<style>
  #TodoList {
    background-color: #fff;
    border-radius: 10px;
    height: 60vh;
    max-width: 400px;
    padding: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
  }
</style>
