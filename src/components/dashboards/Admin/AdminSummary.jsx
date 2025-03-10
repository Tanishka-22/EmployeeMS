import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import SummaryCard from './SummaryCard';
import { FaUsers } from 'react-icons/fa';
import { FaBuilding, FaMoneyCheckDollar } from 'react-icons/fa6';

export const AdminSummary = () => {
  const [summaryData, setSummaryData] = useState({
    employees: 0,
    departments: 0,
    totalSalary: 0
  });

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const employeesSnapshot = await getDocs(collection(db, "Employees"));
        const employeeCount = employeesSnapshot.size;
        let totalSalary = 0;
        employeesSnapshot.forEach(doc => {
          const salary = Number(doc.data().salary) || 0;
          totalSalary += salary;
        });

        const departmentsSnapshot = await getDocs(collection(db, "Department"));
        const departmentCount = departmentsSnapshot.size;

        setSummaryData({
          employees: employeeCount,
          departments: departmentCount,
          totalSalary: totalSalary
        });
      } catch (error) {
        console.error("Error fetching summary data:", error);
      }
    };

    fetchSummaryData();
  }, []);

  return (
    <div>
      <h3 className='text-3xl'>Overview</h3>
      <div className='flex items-center justify-between p-8'>
        <SummaryCard 
          icon={<FaUsers />} 
          text="Total Employees" 
          number={summaryData.employees.toString()} 
          color="bg-teal-600"
        />
        <SummaryCard 
          icon={<FaBuilding/>} 
          text="Total Departments" 
          number={summaryData.departments.toString()} 
          color="bg-yellow-600"
        />
        <SummaryCard 
          icon={<FaMoneyCheckDollar/>} 
          text="Total Monthly Pay" 
          number={`$${summaryData.totalSalary.toLocaleString()}`} 
          color="bg-red-600"
        />
      </div>
    </div>
  );
};

export default AdminSummary;