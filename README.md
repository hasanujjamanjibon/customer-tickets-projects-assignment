# CS --- Ticket System

🔗 **Live Site:** https://cs-ticket-system-2.netlify.app/

---

## 📌 What is JSX, and why is it used?

`JSX` is a syntax extension for JavaScript that
allows developers to write HTML-like code inside JavaScript.

### Why JSX is used:

- Makes UI code easier to read and write, Combines HTML structure and JavaScript logic in one place, Improves developer experience

---

## 📌 What is the difference between State and Props?

`State`:
state is a built-in object used by components to store and manage dynamic data that changes over time in response to user interactions, API calls, or other events.

`Props`:
props are read-only data passed down from parent to child components.

---

## 📌 What is the useState hook, and how does it work?

`useState` hook is a fundamental function in React that allows functional components to manage local state.

```

### How it works:

1.  Initializes state with a value
2.  Returns current state
3.  Provides a function to update the state
4.  When state updates, the component re-renders automatically

---

## 📌 How can you share state between components in React?

`useState` hook is a function that allows you to add state to a functional component.

### process:

*Move state to parent component
*Pass data as props
*Pass update functions as props to child components

For larger applications, Context API or external state management
libraries can be used.

---

## 📌 How is event handling done in React?

React uses camelCase syntax for events and passes functions as event
handlers.

---

## 🚀 Project Overview

The **CS --- Ticket System** is a React-based ticket management
application where:

- Tickets load from JSON data
- Users can move tickets to In Progress
- Tickets can be marked as Resolved
- Resolved tickets are filtered from the main list
- Data is stored in localStorage for persistence

---

## 🛠️ Technologies Used

- React
- Tailwind CSS
- LocalStorage API
- Component-Based Architecture

---

### Author

CS --- Ticket System Project
```
