# React Quiz App

This is a React Quiz App that allows users to test their knowledge with a series of questions. Users can answer questions and receive a score based on their performance.

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [How It Works](#how-it-works)
- [Lessons and Learnings](#lessons-and-learnings)

## Description

The React Quiz App is a web application built using React that provides an interactive quiz experience. Users can answer multiple-choice questions, receive immediate feedback, and see their final score at the end of the quiz.

## Demo

You can try out the live demo of the React Quiz App [here](https://reactquizmaster.web.app/).

## Usage

- Upon launching the app, users are presented with a start screen welcoming them to the quiz.

- Users can click the "Let's start" button to begin the quiz.

- The quiz consists of a series of questions, and users can select their answers from the provided options.

- A timer counts down the remaining time for each question, and users must answer within the time limit.

- After answering a question, users receive immediate feedback on whether their answer was correct or not.

- Users can see their progress through a progress bar, displaying the number of questions answered and their current score.

- The quiz continues until all questions are answered or the timer runs out.

- At the end of the quiz, users receive their final score and can choose to restart the quiz.

## Features

- Multiple-choice questions.
- Interactive timer for each question.
- Immediate feedback on user answers.
- Progress tracking and scoring.
- Quiz restart option.

## Components

The React Quiz App is structured into various components:

- `Header`: Displays the app's title and logo.
- `Main`: Wraps the main content of the app.
- `Loader`: Shown while the app is loading data.
- `Error`: Displayed if there is an error loading questions.
- `StartScreen`: The initial screen where users can start the quiz.
- `Progress`: Displays progress information during the quiz.
- `Question`: Renders a quiz question.
- `Footer`: Contains the timer and next button.
- `Timer`: Provides a countdown timer for each question.
- `NextButton`: Allows users to proceed to the next question.
- `FinishScreen`: Shown at the end of the quiz, displaying the user's score and an option to restart the quiz.

## How It Works

- The app loads quiz questions from a remote server using the `fetch` API.
- Questions are presented one at a time, and users select their answers.
- A timer counts down for each question, and the app handles user input and scoring.
- After the quiz ends, the user's score is displayed, and they can restart the quiz.

## Lessons and Learnings

Throughout the development of this React Quiz App, valuable lessons and insights were gained:

- **React Component Architecture**: Building various components for the app's user interface.
- **State Management in React**: Handling and updating the app's state to manage questions, user answers, and scores.
- **Fetching Data**: Retrieving quiz questions from an external API using `fetch`.
- **Using `useReducer`**: Employing the `useReducer` hook for more organized state management, making it easier to handle complex state transitions.
- **Loading Questions from a Fake API**: Simulating data retrieval from a remote source by fetching questions from a fake API for testing and development purposes.
- **Timer Implementation**: Creating a timer for each question to enforce time limits.
- **Conditional Rendering**: Showing different components based on the app's state, such as loading screens, quiz questions, and results.

These lessons contribute to a deeper understanding of React and state management while enhancing skills in component-based development and data handling.

## Connect with Me

Feel free to connect with me as we continue to explore the exciting world of React development:

- GitHub: [Adham Nasser](https://github.com/Adham-XIII)
- LinkedIn: [Adham Nasser](https://www.linkedin.com/in/adham-nasser-xiii/)

Happy coding and happy learning! 🌍🚀