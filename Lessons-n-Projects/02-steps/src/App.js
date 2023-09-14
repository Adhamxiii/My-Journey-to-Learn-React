import React, { useState } from "react";

const message = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const previousHandler = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const nextHandler = () => {
    if (step < 3) setStep((step) => step + 1);
  };

  return (
    <>
  <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <div className="message">{message[step - 1]}</div>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousHandler}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
