import React from "react";
import './App.css';

import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
import Users from "./components/Users";

export default function App() {
  return (
    <div className="App"> 
      <Counter />
      <CounterTwo />
      <Users />
    </div>
  );
}
