import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// views

import Login from "../pages/auth/Login.js";
import Register from "../pages/auth/Register.js";

export default function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Redirect from="/auth" to="/login" />
          </Switch>
        </section>
      </main>
    </>
  );
}
