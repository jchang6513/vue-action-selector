export class CalculatorActions {
  increase(state) {
    return {
      ...state,
      value: state.value + 1
    };
  }

  decrease(state) {
    return {
      ...state,
      value: state.value - 1
    };
  }
}
