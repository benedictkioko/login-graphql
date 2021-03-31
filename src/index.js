import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { client } from "./apollo-client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toast";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
      <ToastContainer
        delay={5000}
        position="top-right"
        style={{ "padding-top": "2vh" }}
      />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
