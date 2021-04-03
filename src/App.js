import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, shallowEqual } from "react-redux";
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
const mapDispatchToProps = (dispatch) => {
  return {
    sectors: (sectors) => dispatch(fetchSectors(sectors)),
    countries: (countries) => dispatch(fetchCountries(countries)),
  };
};

const categoryQuery = gql`
  {
    allCategories {
      id
      category
    }
  }
`;

const countryQuery = gql`
  {
    allCountries {
      id
      country
    }
  }
`;

const Load = (props) => {
  const { data: countryData } = useQuery(countryQuery, {
    onCompleted(countryData) {
      if (countryData) {
        props.fetchCountries(countryData.allCountries);
      }
    },
  });
  const { data: sectorData } = useQuery(categoryQuery, {
    onCompleted(sectorData) {
      if (sectorData) {
        // console.log(sectorData);
        props.fetchSectors(sectorData.allCategories);
      }
    },
  });

  return null;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps)(App);
