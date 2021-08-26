import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./views/AboutPage";
import TaskEditPage from "./views/TaskEditPage";
import TaskListPage from "./views/TaskListPage";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true} >
            <TaskListPage />
          </Route>
          <Route path="/about-us" exact={true} >
            <AboutPage />
          </Route>
          <Route path="/edit/:id" exact={true} >
            <TaskEditPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
