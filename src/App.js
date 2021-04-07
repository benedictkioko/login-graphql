import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createBrowserHistory } from "history";

// css
import "./assets/styles/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

// layout
import Admin from "./layouts/Admin";
import Scot from "./layouts/Scot";

// redux actions
import { fetchSectors, fetchCountries } from "./actions/dashAction";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { userLogout } from "./actions/authAction";
import { toast } from "react-toast";

const BrowserHistory = createBrowserHistory();

const App = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state, shallowEqual);

  // if (state.error.message === "Signature has expired") {
  //   localStorage.clear();
  //   dispatch(userLogout());
  //   // props.history.push("/login");
  //   <Redirect to={{ pathname: "/login" }} />;
  //   toast.success("Logged out Successfully");
  // }

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
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/app" component={Scot} />
          <PrivateRoute path="/profile" component={Profile} />
          {/* umprotected routes */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="*" to="/login" />
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
