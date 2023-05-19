import React from "react";
import LoginForm from "../components/LoginForm";

function LoginScreen(props) {
  return (
    <div className="relative flex flex-col items-center h-screen overflow-hidden mx-2">
      <img src="logo.png" alt="Logo" className="my-7 w-3/4 sm:w-1/2" />
      <LoginForm></LoginForm>
    </div>
  );
}

export default LoginScreen;
