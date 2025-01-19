import React from 'react'
import logo from '../../../assets/images/logo.png'

export const EmpSidebar = () => {
  return (
      <div className='AdminSidebar w-64 h-screen shadow-lg'>
        <div className='flex items-center justify-center'><img src={logo} className='w-8 h-8'></img>
          <h1 className='logoHead'>EmployeeMS</h1>
        </div>
        <div className='mt-8 p-2'>
          <ul>
            <li className='navList items-center  py-3 rounded'>Dashboard</li>
            <li className='navList items-center  py-3 rounded'>Profie</li>
            <li className='navList items-center  py-3 rounded'>Log Out</li>
          </ul>
        </div>
      </div>
    )
}
