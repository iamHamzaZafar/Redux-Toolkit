# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



---

# Counter App

This project is a simple Counter App built using **React** and **Redux Toolkit**. It demonstrates state management in React with Redux Toolkit by using `useSelector` and `useDispatch` hooks to access and modify the Redux store state.

## Table of Contents
- [Installation](#installation)
- [Steps to Set Up Redux Toolkit](#steps-to-set-up-redux-toolkit)
- [Available Scripts](#available-scripts)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/counter-app.git
   cd counter-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Steps to Set Up Redux Toolkit

To set up Redux Toolkit for the Counter App, follow these steps:

1. **Create a React Project**
   ```bash
   npx create-react-app counter-app
   cd counter-app
   ```

2. **Install Redux Toolkit and React Redux**
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

3. **Configure the Redux Store**

   - In the `src` folder, create a `store` folder and add a `store.js` file:
     ```javascript
     import { configureStore } from '@reduxjs/toolkit';
     import counterReducer from './features/counterSlice';

     export const store = configureStore({
       reducer: {
         counter: counterReducer,
       },
     });
     ```

4. **Wrap the Main Component in the Provider**

   - Open `src/index.js` and wrap the `<App />` component with `<Provider>`:
     ```javascript
     import React from 'react';
     import ReactDOM from 'react-dom';
     import { Provider } from 'react-redux';
     import { store } from './store';
     import App from './App';

     ReactDOM.render(
       <Provider store={store}>
         <App />
       </Provider>,
       document.getElementById('root')
     );
     ```

5. **Create a Slice and Write Reducer**

   - Create a new file `src/features/counterSlice.js` and define your counter slice:
     ```javascript
     import { createSlice } from '@reduxjs/toolkit';

     export const counterSlice = createSlice({
       name: 'counter',
       initialState: {
         value: 0,
       },
       reducers: {
         increment: (state) => {
           state.value += 1;
         },
         decrement: (state) => {
           state.value -= 1;
         },
         reset: (state) => {
           state.value = 0;
         },
       },
     });

     export const { increment, decrement, reset } = counterSlice.actions;
     export default counterSlice.reducer;
     ```

6. **Create UI and Use Redux Hooks**

   - In your component, use `useSelector` to access state and `useDispatch` to dispatch actions:
     ```javascript
     import React from 'react';
     import { useSelector, useDispatch } from 'react-redux';
     import { increment, decrement, reset } from './features/counterSlice';

     function Counter() {
       const count = useSelector((state) => state.counter.value);
       const dispatch = useDispatch();

       return (
         <div>
           <h1>Counter: {count}</h1>
           <button onClick={() => dispatch(increment())}>Increment</button>
           <button onClick={() => dispatch(decrement())}>Decrement</button>
           <button onClick={() => dispatch(reset())}>Reset</button>
         </div>
       );
     }

     export default Counter;
     ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

This README provides a guide to setting up and running the Counter App using Redux Toolkit in React. Once ready, feel free to push it to GitHub!