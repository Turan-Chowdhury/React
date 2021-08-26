import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles/custom-style.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();



// // Get CreateStore from 'redux'
// import { createStore } from "redux";

// // Initialize a store object
// const initializeState = {
//   counter : 0, 
//   value : 2,
//   taskForm : {
//     title : "",
//     priority : ""
//   },
//   tasklist : []
// }

// // Do jobs on changes any action
// function counterReducer(state = initializeState, action) {

//   switch(action.type){

//     case "GET_COUNTER":
//       return {
//         ...state
//       } 

//     case "UPDATE_COUNTER":
//       return {
//         ...state,
//         counter : 1
//       } 

//     case "UPDATE_VALUE":
//       return {
//         ...state,
//         value : 22
//       } 

//     case "INCREMENT_COUNTER":
//       return {
//         ...state,
//         counter : state.counterReducer.counter + 1
//       }

//     case "DECREMENT_COUNTER":
//       return {
//         ...state,
//         counter : state.counterReducer.counter - 1
//       }

//     case "PASS_DYNAMIC_DATA":
//       console.log("enter in dynamic data");
//       console.log("action ", action);
//       console.log("value ", action.payload);
//       return {
//         ...state,
//         counter : action.payload
//       }

//     case "ADD_TASK":
//       return {
//         ...state,
//         taskForm : action.payload
//       }

//     case "ADD_NEW_TASK_TO_TASKLIST":
//       return {
//         ...state,
//         tasklist : [ ...state.tasklist, action.payload]
//       }


//     default:
//       break;

//   }

//   return state;
// }

// // Set a store
// let store = createStore(counterReducer);

// // Listen that anything changes in the store
// store.subscribe(() => console.log(store.getState()));

// // Get data
// store.dispatch({ type : "GET_COUNTER" });

// // Update data in the store / global store
// store.dispatch({ type : "UPDATE_COUNTER" });
// store.dispatch({ type : "UPDATE_VALUE" });

// store.dispatch({ type : "INCREMENT_COUNTER" });
// store.dispatch({ type : "INCREMENT_COUNTER" });

// store.dispatch({ type : "DECREMENT_COUNTER" });
// store.dispatch({ type : "DECREMENT_COUNTER" });

// // Pass dynamic data reducer
// store.dispatch({ type : "PASS_DYNAMIC_DATA", payload : 30 })

// const taskData = {
//   title : "Dynamic Title From Frontend",
//   priority : "Very High"
// }

// store.dispatch({ type : "ADD_TASK", payload : taskData })
// store.dispatch({ type : "ADD_NEW_TASK_TO_TASKLIST", payload : taskData })


