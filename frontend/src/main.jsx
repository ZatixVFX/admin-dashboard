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

import "./bootstrap.min.css";

import ProjectOne from "./assets/projects/Quantum-Stride.png";

const { userInfo } = store.getState().auth;

const projectsList = [
  {
    name: "Nexora",
    img: "https://images.unsplash.com/photo-1673386582281-98941bd6c37c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=philip-oroni-lH1CACE-Fd8-unsplash.jpg",
    status: "In progress",
    dueDate: "10.08.2024",
    dateStarted: "22.01.2024",
  },
  {
    name: "Veltric",
    img: "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg",
    status: "Planned",
    dueDate: "15.10.2022",
    dateStarted: "20.09.2022",
  },
  {
    name: "Quantis",
    img: "https://images.unsplash.com/photo-1632201717104-b7c59bc026ee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shubham-dhage-50GSjnC7qXw-unsplash.jpg",
    status: "Future",
    dueDate: "10.01.2024",
    dateStarted: "05.10.2023",
  },
  {
    name: "Xyberis",
    img: "https://images.unsplash.com/photo-1644251966592-64ea9643d803?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shubham-dhage-gSOJhmAGqT8-unsplash.jpg",
    status: "Finished",
    dueDate: "20.01.2024",
    dateStarted: "15.11.2023",
  },
  {
    name: "Zyvon",
    img: "https://images.unsplash.com/photo-1627021849821-2415df5ec6ed?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shubham-dhage-VEEqzwGwnpk-unsplash.jpg",
    status: "In progress",
    dueDate: "20.10.2022",
    dateStarted: "18.08.2022",
  },
  {
    name: "Trovic",
    img: "https://unsplash.com/photos/dstk031lVXY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTkzfHwzRCUyMHNoYXBlJTIwbW9kZWx8ZW58MHx8fHwxNzQyMTU1MzE4fDI&force=true",
    status: "Future",
    dueDate: "18.12.2023",
    dateStarted: "20.10.2023",
  },
  {
    name: "Blyze",
    img: "https://unsplash.com/photos/l5V-XxaHdMg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQyMTU1ODQ4fA&force=true",
    status: "Finished",
    dueDate: "10.12.2022",
    dateStarted: "05.09.2022",
  },
  {
    name: "Orba",
    img: "https://unsplash.com/photos/MGyUZ4pm3ZY/download?force=true",
    status: "Planned",
    dueDate: "10.08.2024",
    dateStarted: "21.07.2024",
  },
  {
    name: "Trovic",
    img: "https://lc.cx/8u0IjN",
    status: "Future",
    dueDate: "11.09.2022",
    dateStarted: "25.07.2022",
  },
];

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
          <Route path="" element={<Projects projects={projectsList} />} />
          {projectsList.map((data, index) => (
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
                  projects={projectsList}
                />
              }
            />
          ))}
        </Route>
      </Route>
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
