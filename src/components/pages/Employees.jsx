import React from 'react'
import { useState } from 'react';
import SideBar from '../dashboards/Admin/SideBar'
import { NavBar } from '../dashboards/Admin/NavBar';
import { AddEmployee } from '../ManageEmployees/AddEmployee';
import EmployeeList from '../ManageEmployees/EmployeeList';

export const ManageEmployees = () => {
    const [addEmployee, setAddEmployee] = useState(false);

    const toggleAddEmployee = () => {
        setAddEmployee(!addEmployee);
    }

  return (
    <div className="flex h-screen">
        <SideBar/>
        <div className="main-content flex-1 p-2">
            <NavBar/>
            <h3 className='text-3xl'>Employees</h3>
            <div className='flex justify-between'>
            <input type='text' placeholder='Search Employees' className='border text-sm py-1 px-2 mx-5' />
            <button onClick={toggleAddEmployee} className="bg-green-700 mt-2 ml-4 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-800 rounded">
            {addEmployee ? 'Cancel' : 'Add New Employee'}</button>    
            </div>
            {addEmployee && <AddEmployee/>}  
            <div>
                <EmployeeList/>
            </div>
        </div> 
    </div>
  )
}


export default ManageEmployees;
