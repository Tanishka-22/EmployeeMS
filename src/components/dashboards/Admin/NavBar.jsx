import React from 'react'
import { useAuth } from '../../context/AuthProvider';

export const NavBar = () => {
  const { handleLogout } = useAuth();
  return (
    <div className='flex justify-between items-center'>
        <h1 className='DashboardHead'>Admin Dashboard</h1>
        <button onClick={handleLogout} className='logoutBtn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          Log Out</button>
    </div>
  )
}
