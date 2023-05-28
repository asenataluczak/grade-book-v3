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
import { isAdmin, isLoggedIn, isStudent, isTeacher } from "./utils";
import UsersScreen from "./screens/UsersScreen";
import GradesStudentScreen from "./screens/GradesStudentScreen";
import GradesTeacherScreen from "./screens/GradesTeacherScreen";

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
      <Protected conditions={[isLoggedIn]} fallback="login">
        <DashboardScreen />
      </Protected>
    ),
    children: [
      {
        path: "users",
        element: (
          <Protected conditions={[isAdmin]} fallback="dashboard">
            <UsersScreen />
          </Protected>
        ),
      },
      {
        path: "my-grades",
        element: (
          <Protected conditions={[isStudent]} fallback="dashboard">
            <GradesStudentScreen />
          </Protected>
        ),
      },
      {
        path: "grades",
        element: (
          <Protected conditions={[isTeacher, isAdmin]} fallback="dashboard">
            <GradesTeacherScreen />
          </Protected>
        ),
      },
    ],
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
