import React from 'react'

export const EmpTasks = () => {
  
    const EmpTasks = [
        {
            id: 1,
            title: 'xyz',
            assignedDate : '22/12/2004',
            deadline: '22/12/2004',
            status: 'completed',
            number: 5,
            description: 'Handles recruitment and employee relations',
        },
        {
            id: 2,
            title: 'xyz',
            assignedDate : '22/12/2004',
            deadline: '22/12/2004',
            status: 'completed',
            number: 5,
            description: 'Handles recruitment and employee relations',
        },
    ];

    return (
        <div>
        <h3 className='text-3xl m-4'>Tasks</h3>
        <div className='task-container flex flex-wrap'>
            {EmpTasks.map((EmpTasks,index) => (
                <React.Fragment key={EmpTasks.id}>
                    <div className='task-row h-full w-[300px] flex-shrink-0 items-center m-4 bg-white rounded-lg shadow-md'>
                    <div className='bg-green-600 greenline'></div>
                    <div className=" ">
                        <div className="flex justify-between bg-green-600 p-2.5 items-center rounded-lg">
                            <p className='text-sm px-3 py-1 bg-gray-100 rounded'>{EmpTasks.status}</p>
                            <p className='text-sm text-white'>{EmpTasks.assignedDate}</p>
                        </div>
                        <div className='p-4'>
                        <p className="text-right  text-sm">Deadline : {EmpTasks.deadline}</p>
                        <p className="font-semibold mt-5 text-xl ">{EmpTasks.title}</p>
                        <p className="text-left mt-2">{EmpTasks.description}</p>   
                        </div>                 
                    </div>
                    </div>
                </React.Fragment>
                ))}
            
        </div>
        </div>
  )
}