export class CalculatorSelector {
  value(state) {
    if (typeof state === "object") {
      return state.value;
    }
  }
}
