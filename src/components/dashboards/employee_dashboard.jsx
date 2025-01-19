import React from 'react';
import { EmpSidebar } from './Employee/EmpSidebar';
import { EmpNavbar } from './Employee/EmpNavbar';
import { EmpSummary } from './Employee/EmpSummary';
import { EmpTasks } from './Employee/EmpTasks';

const EmployeeDashboard = () => {
    return (
            <div className="admin-dashboard flex">
                <EmpSidebar/>
                <div className="main-content flex-1 p-2">
                    <EmpNavbar/>
                    <EmpSummary/>
                    <EmpTasks/>
                </div>
            </div>
    );
};

export default EmployeeDashboard;