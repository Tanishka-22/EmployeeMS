import React from 'react';
import SideBar from './Admin/SideBar';
import { NavBar } from './Admin/NavBar';
import { AdminSummary } from './Admin/AdminSummary';


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

