import React from 'react';
import { useState } from 'react';

export const DeptList = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const department = [
        {
            id: 1,
            name: 'HR',
            description: 'Handles recruitment and employee relations',
            number: 5,
        },
        {
            id: 2,
            name: 'IT',
            description: 'Manages company technology and IT infrastructure',
            number: 10,
        },
    ];


    return (
        <table className="w-full m-8 table-auto">
            <thead>
                <tr className='tableHead py-2'>
                    <th>S.No</th>
                    <th>Department Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {department.map((dept, index) => (
                    <React.Fragment key={dept.id}>
                        <tr className='w-full tableRow'>
                            <td>{index + 1}</td>
                            <td>{dept.name}</td>
                            <td>
                                <button className='bg-green-500 py-1 px-3.5 mx-2 rounded' onClick={toggleDescription}>
                                    {isExpanded ? 'Hide' : 'View'}
                                </button>
                                <button className='bg-blue-500 py-1 px-3.5 mx-2 rounded'>
                                    Edit
                                </button>
                            </td>
                        </tr>
                        {isExpanded && (
                            <tr className='w-full'>
                                <td colSpan="3">
                                    <div className='task-card justify-between w-full px-5 py-3 bg-gray-50 text-left border-gray-500'>
                                        <p>No. of employees : {dept.number}</p>
                                        <p>Description : {dept.description}</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};