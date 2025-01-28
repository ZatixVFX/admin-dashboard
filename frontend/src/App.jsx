import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./bootstrap.min.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
