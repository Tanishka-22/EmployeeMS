import React, { useState } from 'react';

const TaskCard = ({ empName, title, status, dateOfAssignment, deadline, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='TaskCard w-full'>
      <div onClick={handleToggle} className="task-card flex text-semibold justify-between w-full px-5 py-3 bg-gray-300 shadow-lg rounded-lg cursor-pointer">
        <p>{empName}</p>
        <p>{title}</p>
        <p>Status: {status}</p>
      </div>
      {isExpanded && (
        <div className="task-card justify-between w-full px-5 py-3 bg-gray-100 text-left shadow-lg rounded">
          <p>Date of Assignment: {dateOfAssignment}</p>
          <p>Deadline: {deadline}</p>
          <p>Description: {description}</p>
        </div>
      )}
    </div>
  );
};

export default TaskCard;