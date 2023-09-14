import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=100&from=${from}&to=${to}`
      );
      const data = await res.json();
      setResult(data.rates[to] * amount);
      setIsLoading(false);
    }

    if (from === to) {
      return setResult(amount);
    }

    convert();
  }, [amount, from, to]);

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="converter">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={isLoading}
          className="amount-input"
        />
        <div className="select-container">
          <select
            onChange={(e) => setFrom(e.target.value)}
            value={from}
            className="currency-select"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="CAD">CAD (C$)</option>
            <option value="INR">INR (₹)</option>
          </select>
          <span className="arrow">➜</span>
          <select
            onChange={(e) => setTo(e.target.value)}
            value={to}
            className="currency-select"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="CAD">CAD (C$)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </div>
        <p className="result">{isLoading ? "Loading..." : result}</p>
      </div>
    </div>
  );
};

export default App;
