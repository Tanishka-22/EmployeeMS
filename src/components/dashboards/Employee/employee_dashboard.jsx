import React from 'react';
import { EmpSidebar } from './EmpSidebar';
import { EmpNavbar } from './EmpNavbar';
import { EmpSummary } from './EmpSummary';
import { EmpTasks } from './EmpTasks';

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