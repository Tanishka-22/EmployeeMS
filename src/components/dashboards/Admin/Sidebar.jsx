import React from 'react'
import logo from '../../../assets/images/logo.png'
import { Link, NavLink } from 'react-router'

const SideBar = () => {
  return (
    <nav className='AdminSidebar w-64 h-screen shadow-lg'>
      <div className='flex items-center justify-center'><img src={logo} className='w-8 h-8'></img>
        <h1 className='logoHead'>EmployeeMS</h1>
      </div>
      <div className='mt-8 p-2'>
        <ul> 
          <li className='navList items-center  py-3 rounded'>
            <NavLink
              to="/AdminDashboard"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
            Dashboard
            </NavLink>
          </li>
          <li className='navList items-center  py-3 rounded'>
            <NavLink
              to="/AdminDashboard/Tasks"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
            Tasks
            </NavLink>
          </li>
          <li className='navList items-center  py-3 rounded'>
            <NavLink
              to="/AdminDashboard/Employees"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Employees
            </NavLink>
          </li>
          <li className='navList items-center  py-3 rounded'>
            <NavLink
              to="/AdminDashboard/Departments"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Departments
            </NavLink>
          </li>
          <li className='navList items-center  py-3 rounded'>
            <NavLink
              to="/AdminDashboard"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar;



