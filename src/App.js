import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import "./styles/main.css";
import { useSelector, shallowEqual } from "react-redux";
import { createBrowserHistory } from "history";

const App = (props) => {
  const state = useSelector((state) => state, shallowEqual);

  const isAuthenticated = state.auth.isAuthenticated;
  const hist = createBrowserHistory();

  useEffect(() => {
    if (state.auth.accessToken != null) {
      <Redirect
        pushto={{
          pathname: "/",
        }}
      />;
      // hist.push("/");
    }
    console.log("useeffect", props.isAuthenticated);
  });

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Fragment>
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )
          }
        />
      </Fragment>
    );
  };
  return (
    <Router history={hist}>
      <div>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps)(App);
