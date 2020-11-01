import React from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "./views/Auth/Auth";
import { Home } from "./views/Home/Home";
import { AnonRoute } from "./components/Routes/AnonRoute";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { NotFound } from "./views/Errors/NotFound";
import { ServerError } from "./views/Errors/ServerError";
import { Unauthorize } from "./views/Errors/Unauthorized";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <PrivateRoute path="/*" component={Navbar} />
      <Switch>
        <AnonRoute exact path="/" component={Auth} />
        <PrivateRoute exact path="/user" component={Home} />
        <Route exact path="/500" component={ServerError} />
        <Route exact path="/403" component={Unauthorize} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
