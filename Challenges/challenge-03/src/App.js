import React, { useState } from "react";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("Jun 22 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>Decrement</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>Increment</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>Decrement</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c + step)}>Increment</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};
