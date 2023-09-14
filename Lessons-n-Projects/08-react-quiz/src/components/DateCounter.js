import React, { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  //   if (action.type === "dec") {
  //     return state - 1;
  //   }
  //   if (action.type === "inc") {
  //     return state + 1;
  //   }
  //   if (action.type === "setCount") {
  //     return action.payload;
  //   }

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  //   const [count, dispatch] = useReducer(reducer, 0);
  //   const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("june 21 2023");
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({ type: "dec" });
  };

  const inc = () => {
    dispatch({ type: "inc" });
  };

  const defineCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <div>{date.toLocaleDateString()}</div>
      <div>{count}</div>
      <div>
        <button onClick={dec}>Dec</button>
        <button onClick={inc}>Inc</button>
      </div>
      <div>
        <input type="number" value={step} onChange={defineStep} />
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
