import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
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

import "./bootstrap.min.css";

const { userInfo } = store.getState().auth;

console.log(userInfo);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {userInfo ? (
        <Route path="" element={<Dashboard />}>
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Route>
      ) : null}
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
