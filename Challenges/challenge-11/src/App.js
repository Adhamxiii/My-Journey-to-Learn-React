import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

import "./App.css";
import { useQuiz } from "./contexts/QuizContext";

// const SECS_PER_QUESTION = 30;
// const initialState = {
//   questions: [],
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highscore: 0,
//   secondRemaining: null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "dataReceived":
//       return { ...state, questions: action.payload, status: "ready" };
//     case "dataFailed":
//       return { ...state, status: "error" };
//     case "start":
//       return {
//         ...state,
//         status: "active",
//         secondRemaining: state.questions.length * SECS_PER_QUESTION,
//       };
//     case "newAnswer":
//       const question = state.questions.at(state.index);
//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };
//     case "nextQuestion":
//       return {
//         ...state,
//         index: state.index + 1,
//         answer: null,
//       };
//     case "finish":
//       return {
//         ...state,
//         status: "finish",
//         highscore:
//           state.points > state.highscore ? state.points : state.highscore,
//       };
//     case "reset":
//       return {
//         ...initialState,
//         questions: state.questions,
//         status: "ready",
//         highscore: state.highscore,
//       };
//     case "tick":
//       return {
//         ...state,
//         secondRemaining: state.secondRemaining - 1,
//         status: state.secondRemaining === 0 ? "finish" : state.status,
//       };
//     default:
//       throw new Error("Unknown action");
//   }
// }

function App() {
  // const [
  //   { questions, status, index, answer, points, highscore, secondRemaining },
  //   dispatch,
  // ] = useReducer(reducer, initialState);

  // const numQuestions = questions.length;
  // const maxPossiblePoints = questions.reduce(
  //   (prev, cur) => prev + cur.points,
  //   0
  // );

  // useEffect(() => {
  //   fetch("http://localhost:8000/questions")
  //     .then((response) => response.json())
  //     .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //     .catch((error) => dispatch({ type: "dataFailed" }));
  // }, []);

  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
