import React from 'react'
import { useState } from 'react';
import SideBar from '../dashboards/Admin/SideBar'
import { NavBar } from '../dashboards/Admin/NavBar';
import { AddDepartment } from '../Department/AddDepartment';
import { DeptList } from '../Department/DeptList';

;
export const Department = () => {
    const [addDepartment, setAddDepartment] = useState(false);

     const toggleAddDepartment = () => {
         setAddDepartment(!addDepartment);
    }
  return ( 
    <div className="flex h-screen">
       
        <div className="main-content flex-1 p-2">
           
            <h3 className='text-3xl'>Department</h3>
            <div className='flex justify-between'>
            <input type='text' placeholder='Search Department' className='border text-sm py-1 px-2 mx-5' />
                <button  onClick={toggleAddDepartment} className="bg-green-700 mt-2 ml-4 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-800 rounded">
            {addDepartment ? 'Cancel' : 'Add new department'}</button>  
            </div>
            {addDepartment && <AddDepartment/>}
            <DeptList/>
        </div>
    </div> 
  )
}
