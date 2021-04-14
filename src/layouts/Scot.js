import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";

// components
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

// views
import Target from "../pages/app/Target";
import Stats from "../pages/app/Stats";
import Asr from "../pages/app/Asr";
import Exploitation from "../pages/app/Exploitation";
import Spectrum from "../pages/app/Spectrum";
import TargetDetails from "../pages/app/TargetDetails";

export default function Scot() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gradient-to-r from-rose-100 to-teal-100">
        <Navbar />
        {/* Header */}
        <Header />
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route path="/app/target" exact component={Target} />
            <Route path="/app/statistics" exact component={Stats} />
            <Route path="/app/asr" exact component={Asr} />
            <Route
              path="/app/asr/attack-surface/:id"
              exact
              component={TargetDetails}
            />
            <Route path="/app/exploitation" exact component={Exploitation} />
            <Route path="/app/spectrum" exact component={Spectrum} />

            <Redirect from="/app" to="/app/target" />
          </Switch>
          <Footer />
        </div>
      </div>
    </>
  );
}
