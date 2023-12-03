# The Compound Component Pattern

In this exercise, we explore the Compound Component Pattern using React. The Compound Component Pattern allows us to build components that work together seamlessly while providing a flexible and intuitive API for consuming these components.

## Table of Contents

- [The Compound Component Pattern](#the-compound-component-pattern)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Usage](#usage)
  - [How it Works](#how-it-works)
  - [Components](#components)
  - [Connect with Me](#connect-with-me)

## Overview

The Compound Component Pattern is a design pattern in React that enables the composition of components in a way that they work together as a single unit, providing a clean and flexible API for developers. In this exercise, we'll create a simple example of this pattern with a Counter component.

## Usage

To use the Counter component with the Compound Component Pattern, follow these steps:

1. Wrap the Counter components you want to compose within the main `<Counter>` component.
2. Use the nested components `<Counter.Label>`, `<Counter.Increase>`, `<Counter.Decrease>`, and `<Counter.Count>` as needed within the `<Counter>` component.

## How it Works

Here's how the Compound Component Pattern works in this exercise:

1. We create a context called `CounterContext` to share state and functions between the Counter components.

2. The `<Counter>` component serves as the parent component, where we manage the state (count) and functions (increase and decrease). It wraps its children with the `CounterContext.Provider`.

3. The child components `<Counter.Label>`, `<Counter.Increase>`, `<Counter.Decrease>`, and `<Counter.Count>` consume the context to access the count and functions without prop drilling.

4. These child components can be freely composed within the `<Counter>` component, allowing for flexible customization of the counter UI.

## Components

- `<Counter>`: The main component that manages the counter's state and functions.

- `<Counter.Label>`: A child component for rendering a label.

- `<Counter.Increase>`: A child component for increasing the counter.

- `<Counter.Decrease>`: A child component for decreasing the counter.

- `<Counter.Count>`: A child component for displaying the counter's value.

## Connect with Me

- GitHub: [Adham Nasser](https://github.com/Adhamxiii)
- LinkedIn: [Adham Nasser](https://www.linkedin.com/in/adhamnasser/)

Happy coding and exploring the Compound Component Pattern in React! 🚀
