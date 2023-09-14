# Fast React Pizza Co. - Pizza Menu App

Welcome to the **Fast React Pizza Co.** Pizza Menu App! This app displays a variety of delicious pizzas that you can order from our restaurant. You'll find a range of pizza options, their ingredients, prices, and availability status. This project has been developed as part of a lesson on foundational concepts in frontend development using React.

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

The **Fast React Pizza Co.** app showcases the following functionalities:

1. **Displaying Pizzas**: The main feature of the app is to display a variety of pizzas available at our restaurant. Each pizza comes with its name, ingredients, price, and a photo.

2. **Conditional Rendering**: The app demonstrates how to conditionally render content using both the `&&` operator and ternary expressions. For example, if a pizza is sold out, it's indicated as "SOLD OUT" in the UI, and the price is not shown.

3. **Component Reusability**: Components have been designed with reusability in mind. The `Pizza` component is used to render individual pizzas, and the `Order` component is used to display opening hours and order options.

4. **Component Communication**: The `Pizza` component receives data from the parent `Menu` component through props. This demonstrates the concept of passing and receiving props in React.

5. **React Fragments**: React fragments are used to group elements without adding unnecessary elements to the DOM. This keeps the rendered HTML clean and semantic.

## Features

- **Pizza Listings**: See a list of available pizzas, each with its name, ingredients, price, and photo.
- **Conditional Styling**: Pizzas that are sold out are visually marked with a "SOLD OUT" tag.
- **Opening Hours**: The footer displays whether the restaurant is currently open or the opening hours if it's closed.

## Learnings

Throughout this project, I've gained a solid understanding of key frontend development concepts using React:

- **Components as Building Blocks**: Components are the fundamental building blocks of a React application, allowing us to create reusable and modular UI elements.

- **JSX**: JSX is a syntax extension for JavaScript that allows us to write HTML-like code within our JavaScript files, making it easier to define UI components.

- **JavaScript Logic in Components**: JavaScript logic can be seamlessly integrated into JSX, allowing us to perform dynamic operations and calculations within components.

- **Separation of Concerns**: The project demonstrates the separation of concerns, with different components responsible for rendering specific parts of the UI.

- **Passing and Receiving Props**: Props are a way to pass data from parent to child components, enabling dynamic content and reusability.

- **Rendering Lists**: Mapping over arrays to render dynamic lists of components efficiently.

- **Conditional Rendering**: Techniques like using the `&&` operator and ternaries to conditionally render elements based on certain conditions.

- **React Fragments**: Using React fragments to group elements without introducing unnecessary elements into the DOM.

- **Styling and Class Assignment**: Applying conditional classes to elements based on data attributes, allowing for dynamic styling.

This project has provided valuable hands-on experience in building a simple React application and applying core frontend development principles. It lays a strong foundation for more advanced topics in React development.

## Live Demo

Check out the live demo of the app: [Fast React Pizza Co.](https://pizza-menu-01.web.app/)
