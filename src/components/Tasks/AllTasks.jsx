import React from 'react'
import TaskCard from './TaskCard';

export const AllTasks = () => {
  return (
    <div>
        <div className='items-center justify-between p-8'>
            <div className='flex text-semibold justify-between w-full px-5 py-3'>
            <p>Employee Name</p>
            <p>Title</p>
            <p>Status</p>
            </div>
            <TaskCard empName="tanishka" title="Task Title" status="Pending" dateOfAssignment="2021-09-01" deadline="2021-09-30" description="This is a task description"/>
        </div>
    </div>
  )
}

export default AllTasks;