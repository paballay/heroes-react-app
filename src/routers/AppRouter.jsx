import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import Dashboard from "./Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={ LoginScreen }></Route>
          <Route path="/" component={ Dashboard }></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
