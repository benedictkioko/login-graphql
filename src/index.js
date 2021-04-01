import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { client } from "./apollo-client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toast";
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ToastContainer delay={5000} position="top-right" />
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
