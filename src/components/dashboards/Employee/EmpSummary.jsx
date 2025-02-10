import React from 'react';
import { EmpSummaryCard } from './EmpSummaryCard'; // Ensure correct import

export const EmpSummary = () => {
    return (
        <div>
            <h3 className='text-3xl'>Overview</h3>
            <div className='flex items-center justify-between p-8'>
                <EmpSummaryCard text="New Task" number="10" color="teal-600" />
                <EmpSummaryCard text="Accepted Task" number="9" color="red-600" />
                <EmpSummaryCard text="Completed Task" number="1" color="yellow-500" />
                <EmpSummaryCard text="Failed Task" number="9" color="blue-500" />
            </div>
        </div>
    );
};