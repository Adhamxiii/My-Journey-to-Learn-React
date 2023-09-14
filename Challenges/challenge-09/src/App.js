import React, { useReducer } from "react";

import "./App.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (state, action) => {
  if (!state.isActive && action.type !== "open") {
    return state;
  }

  switch (action.type) {
    case "open":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "WITHDRAW":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "LOAN":
      if (state.loan > 0) {
        return state;
      }
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "pay":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case "close":
      if (state.loan > 0 || state.balance !== 0) {
        return state;
      }
      return {
        initialState,
      };
    default:
      throw new Error("Unknown");
  }
};
function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="app-container">
      <h1 className="header">Banking App</h1>
      <div className="balance-container">
        <h2 className="balance-label">Balance:</h2>
        <p className="balance-amount">${balance}</p>
      </div>
      <div className="loan-container">
        <h2 className="loan-label">Loan:</h2>
        <p className="loan-amount">${loan}</p>
      </div>
      <div className="button-container">
        <button
          className={`action-button ${isActive ? "disabled" : ""}`}
          onClick={() => dispatch({ type: "open" })}
          disabled={isActive}
        >
          Open Account
        </button>
        <button
          className={`action-button ${!isActive ? "disabled" : ""}`}
          onClick={() => dispatch({ type: "DEPOSIT", payload: 150 })}
          disabled={!isActive}
        >
          Deposit $150
        </button>
        <button
          className={`action-button ${!isActive ? "disabled" : ""}`}
          onClick={() => dispatch({ type: "WITHDRAW", payload: 50 })}
          disabled={!isActive}
        >
          Withdraw $50
        </button>
        <button
          className={`action-button ${!isActive ? "disabled" : ""}`}
          onClick={() => dispatch({ type: "LOAN", payload: 5000 })}
          disabled={!isActive}
        >
          Request Loan $5000
        </button>
        <button
          className={`action-button ${!isActive ? "disabled" : ""}`}
          onClick={() => dispatch({ type: "pay", payload: 100 })}
          disabled={!isActive}
        >
          Pay Loan
        </button>
        <button
          className={`action-button close-button ${
            !isActive ? "disabled" : ""
          }`}
          onClick={() => dispatch({ type: "close" })}
          disabled={!isActive}
        >
          Close Account
        </button>
      </div>
    </div>
  );
}

export default App;
