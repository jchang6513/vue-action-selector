<template>
  <div id="app">
    <div v-if="selector && state">
      <Calculator :state="state" :selector="selector" :increase="increase" :decrease="decrease"/>
    </div>
  </div>
</template>

<script>
import { CalculatorActions } from "./CalculatorActions.js";
import { CalculatorSelector } from "./CalculatorSelector.js";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator
  },
  data: function() {
    return {
      state: undefined,
      actions: undefined,
      selector: undefined
    };
  },
  beforeMount: function() {
    this.actions = new CalculatorActions();
    this.selector = new CalculatorSelector();
    this.state = { value: 0 };
  },
  methods: {
    increase: function() {
      this.state = this.actions.increase(this.state);
    },
    decrease: function() {
      this.state = this.actions.decrease(this.state);
    },
    value: function() {
      return this.selector.value(this.state);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
