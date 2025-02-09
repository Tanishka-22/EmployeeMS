import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='DashboardHead'>Admin Dashboard</h1>
        <button className='logoutBtn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          Log Out</button>
    </div>
  )
}
