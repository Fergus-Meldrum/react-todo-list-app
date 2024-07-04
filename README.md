# Todo List App

A basic Todo list web app built using React, Babel, Node, and Webpack. This app allows you to create, delete, and mark todo list items as complete. Instead of using a database, it stores and modifies data in an array of objects, which is managed through a simple server with defined endpoints.
## Skills Demonstrated

- **Manual App Set Up**
    - `index.html`: Entry point for client.
    - ES6 Support: Enables modern JavaScript and JSX using Babel.
    - Webpack: For building, styling, and serving the app.
    - `index.js`: Root component and base of the component tree.
    - `react-hot-loader`: Instantly see local changes in browser.

- **Basic React**
  - JSX
  - React Hooks:
    - `useState`
    - `useEffect`

- **React Ecosystem Tools**
  - Redux: State management.
  - Thunk: Handles asynchronous interactions with the server.
  - Reselect: Efficiently selects and computes derived data from state.
  - Styled-Components: Manages styles as needed.
  - Testing: Uses Mocha and Chai for testing React code.

## Project Setup

After cloning the project from git:

### 1. Start App

```sh
cd react-todo-list-app

npm run dev
```

### 2. Start Server

```sh
cd react-todolist-server

npm run start
```

### 3. Open localhost:3000 to use the app.

### Running tests

```sh
cd react-todo-list-app

npm run test
```
