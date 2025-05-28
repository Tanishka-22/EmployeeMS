import React, { useState } from 'react';
import AddTask from '../Tasks/AddTask';
import SideBar from '../dashboards/Admin/Sidebar.jsx';
import { NavBar } from '../dashboards/Admin/NavBar';
import AllTasks from '../Tasks/AllTasks';

export const Tasks = () => {
    const[showAddTask, setShowAddTask] = useState(false);

    const toggleAddTask = () => {
        setShowAddTask(!showAddTask);
    };

  return (
    <div className="flex h-screen">
          
            <div className="main-content flex-1 p-2">
               
                <h3 className='text-3xl'>Tasks</h3>
                <div className='flex justify-between'>
                <button onClick={toggleAddTask} className="bg-green-700 mt-2 ml-4 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-800 rounded">
                   {showAddTask ? 'Cancel' : 'Add New Task'} 
                </button>
                </div>
                {showAddTask && <AddTask/>}
                <AllTasks/>
            </div>
        </div>
  )
}

export default Tasks;