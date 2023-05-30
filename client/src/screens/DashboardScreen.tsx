import React, { Fragment, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { clearCredentials } from "../slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function DashboardScreen(props) {
  const [isOpen, setIsOpen] = useState();
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
      <Header
        userInfo={userInfo}
        logout={logout}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} userInfo={userInfo}></Sidebar>
      <section className="pt-16 relative h-full overflow-y-auto lg:ml-56">
        <div className="m-6">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default DashboardScreen;
