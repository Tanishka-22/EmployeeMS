import React from 'react';
import SideBar from './SideBar';
import { NavBar } from './NavBar';
import { AdminSummary } from './AdminSummary';


const AdminDashboard = () => {
    return (
        <div className="admin-dashboard flex">
            <SideBar/>
            <div className="main-content flex-1 p-2">
                <NavBar/>
                <AdminSummary/>
            </div>
        </div>
    );
};

export default AdminDashboard;

