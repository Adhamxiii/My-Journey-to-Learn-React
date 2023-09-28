# Higher-Order Components (HOC) Exercise

This exercise demonstrates the use of Higher-Order Components (HOC) in React to enhance the functionality of components. In this example, we have a list of products and companies, and we've applied HOC to create a toggling feature for displaying limited items initially and expanding to show all items when needed.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Components](#components)
- [Higher-Order Component](#higher-order-component)
- [Usage](#usage)
- [How It Works](#how-it-works)

## Introduction

Higher-Order Components (HOCs) are a powerful pattern in React for reusing component logic. They allow you to extract common logic and wrap components with additional behavior. In this exercise, we apply HOC to two lists: products and companies.

## Project Structure

The project consists of the following files:

- `src/App.js`: The main application component that renders lists of products and companies. HOC is applied to the Product List.
- `src/HOC.js`: The HOC function that enhances a component with toggling functionality.
- `src/styles.css`: The CSS file for styling the components.
- Other necessary React setup files and dependencies.

## Components

### ProductItem

The `ProductItem` component displays information about a product, including its name, price, and description.

### CompanyItem

The `CompanyItem` component displays information about a company, including its name and catchphrase. It includes a toggling feature to show additional information when hovered.

### List

The `List` component is the main component responsible for rendering lists of items. It includes a toggling feature to show a limited number of items initially and expand to show all items when needed.

## Higher-Order Component

The `withToggles` HOC function enhances a component by adding toggling functionality. It allows components to handle displaying a limited number of items initially and expanding to show all items when required.

## Usage

To use this HOC exercise, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to launch the development server.
5. Open your web browser and visit `http://localhost:3000` to see the HOC exercise in action.

## How It Works

- The `withToggles` HOC function is applied to the `ProductList` component.
- When the user interacts with the UI, they can expand and collapse the list of products using the provided buttons.

