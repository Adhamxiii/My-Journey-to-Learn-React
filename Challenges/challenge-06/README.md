# Challenge 6: Text Expander Component

Welcome to the README for Challenge 6, where I've built a Text Expander Component using React. This challenge explores various concepts including Prop Drilling, Fixing Prop Drilling With Composition (And Building a Layout), Passing Elements as Props (Alternative to children), Improving Reusability With Props, and using PropTypes for type validation.

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Key Concepts Learned](#key-concepts-learned)
- [Usage](#usage)
- [Component Details](#component-details)
- [Preview](#preview)

## Introduction

In this challenge, I've developed a Text Expander Component using React that allows users to collapse and expand text content. The goal is to provide a user-friendly way to display lengthy content while preventing information overload.

## Project Overview

The Text Expander Component provides a simple and elegant solution for managing lengthy text content. It offers collapsible and expandable behavior that ensures users can access more information without overwhelming the UI.

## Key Concepts Learned

Throughout the process of building this Text Expander Component, I've gained insights into several important concepts:

- **Prop Drilling**: Understanding how to pass data and props down through multiple levels of components efficiently.

- **Fixing Prop Drilling With Composition**: Using composition to avoid excessive prop drilling and create a more organized component structure.

- **Passing Elements as Props (Alternative to children)**: Passing JSX elements as props to customize the appearance and behavior of a component.

- **Improving Reusability With Props**: Enhancing the reusability of components by accepting props that allow customization.

- **PropTypes**: Implementing PropTypes to validate and document the expected types of props, promoting better code quality and reducing potential bugs.

## Usage

To use the Text Expander Component in your project:

1. Import the `TextExpander` component from the provided code.

2. Place the `TextExpander` component in your JSX, passing the desired text content as children and any optional props for customization.

3. Customize the behavior and appearance of the Text Expander Component by passing appropriate props.

## Component Details

The `TextExpander` component accepts the following props:

- `collapsedNumWords`: The number of words to display when the content is collapsed (default is 10 words).

- `expandButtonText`: The text for the expand button (default is "Show more...").

- `collapseButtonText`: The text for the collapse button (default is "Show less...").

- `buttonColor`: The color of the expand/collapse button (default is '#1f09cd').

- `expanded`: A boolean to determine whether the content is initially expanded (default is `false`).

- `className`: Custom CSS class to style the component (default is 'box').

## Preview

Below is a preview of the Text Expander Component in action:

![preview](./screenshot/preview.gif)

Feel free to explore the code and integrate the Text Expander Component into your own projects to provide a user-friendly experience for displaying lengthy text content.

Connect with me:

- GitHub: [Adham Nasser](https://github.com/Adham-XIII)
- LinkedIn: [Adham Nasser](https://www.linkedin.com/in/adham-nasser-xiii/)

Happy coding and happy learning!
