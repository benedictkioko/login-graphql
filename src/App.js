import React, { Fragment } from "react";
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

const BrowserHistory = createBrowserHistory();

const App = (props) => {
  const state = useSelector((state) => state, shallowEqual);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Fragment>
        <Route
          {...rest}
          render={(props) =>
            state.auth.isAuthenticated ? (
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
    <Router history={BrowserHistory}>
      <div>
        <Switch>
          {/* protected routes */}
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          {/* umprotected routes */}
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
