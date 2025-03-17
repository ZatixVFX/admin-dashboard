import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Dashboards from "./components/Dashboards.jsx";
import UserProfile from "./components/UserProfile.jsx";
import AccountSettings from "./components/accountSettings/AccountSettings.jsx";
import Payments from "./components/payments/Payments.jsx";
import Inbox from "./components/Inbox.jsx";
import Contacts from "./components/Contacts.jsx";
import Projects from "./components/projects/Projects.jsx";
import Project from "./components/projects/Project.jsx";
import OnBoarding from "./components/onboarding/OnBoarding.jsx";

import "./bootstrap.min.css";

import ProjectOne from "./assets/projects/Quantum-Stride.png";

import db from "../db.json";

const { userInfo } = store.getState().auth;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={<Navigate to={userInfo ? "/dashboards" : "/login"} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="" element={<Dashboard />}>
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/payments" element={<Payments />} />
        {/* <Route path="/inbox" element={<Inbox />} /> */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Outlet />}>
          <Route path="" element={<Projects projects={db.projects} />} />
          {db.projects.map((data, index) => (
            <Route
              key={`item-${index}`}
              path={`${data.name.toLocaleLowerCase()}`}
              element={
                <Project
                  name={data.name}
                  img={data.img}
                  status={data.status}
                  dateDue={data.dueDate}
                  dateStarted={data.dateStarted}
                  projects={db.projects}
                />
              }
            />
          ))}
        </Route>
      </Route>
      <Route
        path="/onboarding"
        element={userInfo ? <OnBoarding /> : <Navigate to="/login" />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
