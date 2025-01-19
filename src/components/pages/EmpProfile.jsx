import React from 'react';
import { EmpSidebar } from '../dashboards/Employee/EmpSidebar';
import { EmpNavbar } from '../dashboards/Employee/EmpNavbar';
import { EmpProfileBox } from '../EmpProfile/EmpProfileBox';

export const EmpProfile = () => {
    const employee = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA'
    };

    return (
        <div className="admin-dashboard flex">
            <EmpSidebar />
            <div className="main-content flex-1 p-2">
                <EmpNavbar />
                <EmpProfileBox employee={employee} />
            </div>
        </div>
    );
};