import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("dsadadwsad");
  };
  return (
    <div className="relative flex flex-col items-center h-screen overflow-hidden mx-2">
      <img src="logo.png" alt="Logo" className="my-7 w-3/4 sm:w-1/2" />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        submithandler={submitHandler}
      ></LoginForm>
    </div>
  );
}

export default LoginScreen;
