import React from 'react';

export const EmpSummaryCard = ({ text, number, color }) => {
    return (
        <div className={`summary-card text-white w-1/5 p-4 bg-${color} shadow-lg rounded-lg`}>
            <div className="text-lg p-1 font-semibold">{text}</div>
            <div className="text-xl font-bold">{number}</div>
        </div>
    );
};