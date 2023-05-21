import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Protected from "./components/Protected";
import { isLoggedIn } from "./utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "dashboard",
    element: (
      <Protected condition={isLoggedIn}>
        <DashboardScreen />
      </Protected>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer />
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
