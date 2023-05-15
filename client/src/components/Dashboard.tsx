import React from 'react';
import {Outlet} from "react-router-dom";

function Dashboard(props) {
    return (
        <div>DASHBOARD
        <Outlet/>
        </div>
    );
}

export default Dashboard;