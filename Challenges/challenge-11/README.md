#  Refactoring with Context API

In Challenge 11, the goal is to refactor an existing React application using the Context API. The application appears to be a quiz or question-and-answer game, and the primary objective is to improve its state management and data flow by implementing a global state using the Context API.

## Overview

The application is divided into several files, each serving a specific purpose. Here's a brief overview of the key files involved:

- `App.js`: This is the main component of the application. It renders different screens based on the current status of the quiz. The primary goal is to replace local state management with the Context API.

- `QuizContext.js`: This file defines the QuizContext and provides a QuizProvider component that wraps the entire application. It also includes a reducer for managing the state and actions related to the quiz.

- `DateCounter.js`, `Error.js`, `FinishScreen.js`, `Footer.js`, `Header.js`, `Loader.js`, `Main.js`, `NextButton.js`, `Options.js`, `Progress.js`, `Question.js`, and `StartScreen.js`: These files contain various components used in the application. In Challenge 11, the focus is on refactoring the state management within these components to use the Context API.

## Challenge Objective

The primary challenge in this exercise is to refactor the existing codebase to use the Context API for managing the state of the quiz. This involves migrating the local state and state-related logic within components to the global state managed by the `QuizContext`. Each component should consume the necessary state and dispatch functions from the context instead of managing its own state.

### Steps to Complete the Challenge

1. Identify the components that currently manage local state.

2. Replace local state variables with their counterparts from the global state managed by `QuizContext`.

3. Update component logic to use the state and dispatch functions provided by the context.

4. Test the application thoroughly to ensure that it functions correctly after the refactoring.

5. Pay attention to how the state transitions occur during the quiz, such as starting, answering questions, and finishing. Ensure that these transitions are correctly handled with the Context API.

## Learning Objectives

By completing Challenge 11, you will gain experience in:

- Refactoring a React application to use the Context API for global state management.

- Understanding how to create a context and provider for managing global state.

- Updating components to consume global state and dispatch actions.

- Verifying that the application still functions as expected after the refactoring.

This challenge provides valuable hands-on experience in improving the maintainability and scalability of a React application by centralizing state management using the Context API.

---

## Connect with Me

Feel free to connect with me as we explore more about React development and other exciting topics:

- GitHub: [Adham Nasser](https://github.com/Adhamxiii)
- LinkedIn: [Adham Nasser](https://www.linkedin.com/in/adhamnasser/)

Happy coding and happy learning! 🌍🚀