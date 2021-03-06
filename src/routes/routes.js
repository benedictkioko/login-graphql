import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/admin/Dashboard.js";
import Target from "../pages/admin/Target.js";
import Stats from "../pages/admin/Stats";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
  {
    path: "/profile",
    exact: true,
    component: Register,
  },
  {
    path: "/admin/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/admin/target",
    exact: true,
    component: Target,
  },
  {
    path: "/admin/stats",
    exact: true,
    component: Stats,
  },
];
