<template>
  <div id="Calculator">
    <input v-bind:value="value">
    <button v-on:click="increase">+</button>
    <button v-on:click="decrease">-</button>
  </div>
</template>

<script>
import { CalculatorActions } from "../CalculatorActions.js";
import { CalculatorSelector } from "../CalculatorSelector.js";

export default {
  name: "Calculator",
  delimiters: ["${", "}"],
  props: {
    state: {},
    actions: CalculatorActions,
    selector: CalculatorSelector,
    increase: Function,
    decrease: Function
  },
  computed: {
    value: function() {
      return this.selector.value(this.state);
    }
  }
};
</script>

<style></style>
