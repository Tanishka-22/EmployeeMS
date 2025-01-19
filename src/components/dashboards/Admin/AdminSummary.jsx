import React from 'react';
import SummaryCard from './SummaryCard';
import {  FaUsers} from 'react-icons/fa';
import { FaBuilding, FaMoneyCheckDollar } from 'react-icons/fa6';

export const AdminSummary = () => {
  return (
    <div>
      <h3 className='text-3xl'>Overview</h3>
      <div className='flex items-center justify-between p-8'>
        <SummaryCard icon={<FaUsers />} text="Total Employees" number="10" color="bg-teal-600"/>
        <SummaryCard icon={<FaBuilding/>} text="Total Departments" number="1" color="bg-yellow-600"/>
        <SummaryCard icon={<FaMoneyCheckDollar/>} text="Total Monthly Pay" number="9" color="bg-red-600"/>
      </div>
    </div>
  );
};

export default AdminSummary;