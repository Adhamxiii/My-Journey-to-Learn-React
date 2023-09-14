import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🎖️";
  }
  if (percentage >= 80 && percentage < 100) {
    emoji = "😎";
  }
  if (percentage >= 60 && percentage < 80) {
    emoji = "😒";
  }
  if (percentage >= 40 && percentage < 60) {
    emoji = "🤨";
  }
  if (percentage >= 20 && percentage < 40) {
    emoji = "🤦‍♂️";
  }
  if (percentage < 20) {
    emoji = "💣";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highest score: {highscore} points )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
