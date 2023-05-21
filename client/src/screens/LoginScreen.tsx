import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice.js";
import { useLoginMutation } from "../slices/usersApiSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submit = async (e) => {
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.data?.message || err.error || "Error status: " + err.status);
    }
  };
  return (
    <div className="relative flex flex-col items-center h-screen overflow-hidden mx-auto max-w-screen-sm">
      <img src="logo.png" alt="Logo" className="my-7 w-3/4 sm:w-1/2" />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        submit={submit}
      ></LoginForm>
    </div>
  );
}

export default LoginScreen;
