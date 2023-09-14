import { useState } from "react";
import useGeolocation from "./useGeolocation";

import "./App.css";

export default function App() {
  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocation();
  const [countClicks, setCountClicks] = useState(0);

  const clickHandler = () => {
    setCountClicks((count) => count + 1);
    getPosition();
  };

  return (
    <div className="app-container">
      <button className="btn" onClick={clickHandler} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p className="loading-text">Loading position...</p>}
      {error && <p className="error-text">{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p className="position-text">
          Your GPS position:{" "}
          <a
            className="position-link"
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p className="click-count">You requested position {countClicks} times</p>
    </div>
  );
}
