import React from 'react';
import {Outlet} from "react-router-dom";

function DashboardScreen(props) {
    return (
        <div>DASHBOARD
        <Outlet/>
        </div>
    );
}

export default DashboardScreen;