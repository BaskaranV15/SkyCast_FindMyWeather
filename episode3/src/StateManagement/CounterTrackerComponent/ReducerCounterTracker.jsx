import React, { useReducer } from "react";

const initialState = {
  count: 0,
  incrementCount: 0,
  decrementCount: 0,
};

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        incrementCount: state.incrementCount + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
        decrementCount: state.decrementCount + 1,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function ReducerCounterTracker() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Reducer Counter Tracker App</h2>
      <p>Current Count: {state.count}</p>
      <p>Total Time Incremented: {state.incrementCount}</p>
      <p>Total Time Decremented: {state.decrementCount}</p>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerCounterTracker;