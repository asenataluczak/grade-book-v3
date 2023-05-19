import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { clearCredentials } from "../slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function DashboardScreen(props) {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearCredentials());
    navigate("/login");
    toast.success("Wylogowano");
  };

  return (
    <div>
      DASHBOARD
      <button onClick={logout}>Wyloguj</button>
      <div>{userInfo ? <span>{userInfo.fullname}</span> : "no data"}</div>
      <Outlet />
    </div>
  );
}

export default DashboardScreen;
