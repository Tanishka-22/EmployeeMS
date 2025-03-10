import React, { useState } from 'react';

const TaskCard = ({ id, employee, title, status, assignedOn, deadline, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getStatusColor = (status) => {
    if (!status) return 'bg-gray-200';  // Default color if status is undefined
    
    switch(status.toLowerCase()) {
      case 'completed':
        return 'bg-green-200';
      case 'pending':
        return 'bg-yellow-200';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className='TaskCard w-full' key={id}>
      <div 
        onClick={handleToggle} 
        className={`task-card flex text-semibold justify-between w-full px-5 py-3 ${getStatusColor(status)} shadow-lg rounded-lg cursor-pointer`}
      >
        <p>{employee || 'N/A'}</p>
        <p>{title || 'N/A'}</p>
        <p>Status: {status || 'Pending'}</p>
      </div>
      {isExpanded && (
        <div className="task-details mt-2 w-full px-5 py-3 bg-white border border-gray-200 text-left shadow-lg rounded">
          <p className="mb-2"><span className="font-semibold">Date of Assignment:</span> {assignedOn || 'Not set'}</p>
          <p className="mb-2"><span className="font-semibold">Deadline:</span> {deadline || 'Not set'}</p>
          <p className="mb-2"><span className="font-semibold">Description:</span> {description || 'No description available'}</p>
        </div>
      )}
    </div>
  );
};

export default TaskCard;