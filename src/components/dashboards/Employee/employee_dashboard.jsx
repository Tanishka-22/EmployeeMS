import React from 'react';
import { EmpSidebar } from './EmpSidebar';
import { EmpNavbar } from './EmpNavbar';
import { EmpSummary } from './EmpSummary';
import { EmpTasks } from './EmpTasks';
import { Routes, Route } from 'react-router-dom';
import { EmpProfile } from '../../pages/EmpProfile';

const EmployeeDashboard = () => {
    return (
            <div className="admin-dashboard flex">
                <EmpSidebar/>
                <div className="main-content flex-1 p-2">
                    <EmpNavbar/>   
                    <Routes>   
                        <Route index element={<EmpSummary/>}/>
                        <Route index element={<EmpTasks/>}/>
                        <Route path="/EmployeeDashboard" element={<EmpSummary/>}/>
                        <Route path="/EmployeeDashboard" element={<EmpTasks/>}/>
                        <Route path="/EmployeeDashboard/Profile" element={<EmpProfile/>}/>
                        
                    </Routes>
                </div>
            </div>
    );
};

export default EmployeeDashboard;