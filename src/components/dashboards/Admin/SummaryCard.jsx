import React from 'react';

const SummaryCard = ({ icon, text, number, color }) => {
  return (
    <div className="summary-card flex p-4 bg-white shadow-lg rounded-lg">
      <div className={`flex mr-1 justify-center text-3xl items-center ${color} text-white px-4`}>
        {icon}
      </div>
      <div>
        <div className="text-lg p-1 font-semibold">{text}</div>
        <div className="text-xl font-bold">{number}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
