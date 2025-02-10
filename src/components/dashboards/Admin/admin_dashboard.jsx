import React from 'react';
import SideBar from './SideBar';
import { NavBar } from './NavBar';
import { AdminSummary } from './AdminSummary';
import { Routes, Route } from 'react-router-dom';
import Tasks from '../../pages/Tasks';
import { Department } from '../../pages/Department';
import ManageEmployees from '../../pages/Employees';


const AdminDashboard = () => {
    return (
        <div className="admin-dashboard flex">
            <SideBar/>
            <div className="main-content flex-1 p-2">
                <NavBar/>
                <Routes>
                    <Route index element={<AdminSummary />} />
                    <Route path="/AdminDashboard" element={<AdminSummary/>}/>
                    <Route path="/AdminDashboard/Tasks" element={<Tasks/>}/>
                    <Route path="/AdminDashboard/Employees" element={<ManageEmployees/>}/>
                    <Route path="/AdminDashboard/Departments" element={<Department/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;

