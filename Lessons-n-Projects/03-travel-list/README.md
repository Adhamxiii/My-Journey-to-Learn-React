# Building a Packing List App

Welcome to **Far Away** Travel List! In this app, I've built a Packing List App that demonstrates fundamental concepts in frontend development using React. This app allows users to create a list of items they need for a trip, mark items as packed, and view helpful stats about their packing progress.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Learnings](#learnings)
- [Live Demo](#live-demo)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to launch the development server.
5. Open your web browser and visit `http://localhost:3000` to see the app in action.

## Usage

The **Packing List App** showcases the following functionalities:

1. **Adding Items**: Users can add items they need for their trip. Each item includes a description and quantity.

2. **Marking Items as Packed**: Users can mark items as packed or unpacked by toggling a checkbox next to each item.

3. **Sorting and Clearing List**: Users can sort the list of items by input order, description, or packed status. They can also clear the entire list.

4. **Stats Display**: The footer displays helpful stats about the user's packing progress, including the percentage of items that have been packed.

## Features

- **Item Management**: Add items with descriptions and quantities, and toggle their packed status.
- **Sorting Options**: Sort the list of items by input order, description, or packed status.
- **Stats Overview**: View stats about packing progress, including the percentage of packed items.

## Learnings

During the development of this project, I've gained insights into key concepts in React and frontend development:

- **State Management**: Utilized React's `useState` hook to manage and update the list of items and their packed status.

- **Component Communication**: Demonstrated communication between components by passing and receiving props. Child components interact with the parent `App` component to update the list and stats.

- **Conditional Rendering**: Employed conditional rendering techniques to display content based on packed status and sorting choices.

- **React Fragments**: Utilized React fragments to group elements without adding unnecessary DOM elements.

- **Dynamic Styling**: Applied conditional styling to items based on their packed status, enhancing the visual experience.

- **Array Manipulation**: Employed array manipulation methods such as `map`, `filter`, and `sort` to manage and display the list of items effectively.

## Live Demo

Check out the live demo of the app: [Packing List App](https://travel-list-00.web.app/)
