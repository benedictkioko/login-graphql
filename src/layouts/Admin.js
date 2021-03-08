import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";

// components
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeaderStats from "../components/Header/HeaderStats";

// views
import Dashboard from "../pages/admin/Dashboard.js";
// import Target from "../pages/app/target.js";
// import Stats from "../pages/app/stats.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <Navbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            {/* <Route path="/app/target" exact component={Target} />
            <Route path="/app/stats" exact component={Stats} /> */}

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <Footer />
        </div>
      </div>
    </>
  );
}
