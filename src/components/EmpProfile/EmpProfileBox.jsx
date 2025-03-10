import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import person from '../../assets/images/person.jpg';
import { auth } from '../firebase';

export const EmpProfileBox = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const employeeDoc = await getDoc(doc(db, "Employees", currentUser.uid));
          if (employeeDoc.exists()) {
            setEmployeeData(employeeDoc.data());
          }
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <div className='bg-white p-6 rounded-md shadow-md m-10'>
      <div><h1 className='text-3xl font-bold'>Employee Details</h1></div>
      <div className='flex py-5 items-center align-middle'>
        <div className='flex justify-center w-1/2'>
          <img src={person} alt="Employee" className='EmpImage' />
        </div>
        <div className='flex flex-col text-left py-3 text-semibold'>
          <p className="my-2"><b>Name:</b> {employeeData?.name || 'Loading...'}</p>
          <p className="my-2"><b>Employee ID:</b> {employeeData?.empID || 'Loading...'}</p>
          <p className="my-2"><b>Date of birth:</b> {employeeData?.DOB || 'Loading...'}</p>
          <p className="my-2"><b>Gender:</b> {employeeData?.gender || 'Loading...'}</p>
          <p className="my-2"><b>Marital Status:</b> {employeeData?.maritalStatus || 'Loading...'}</p>
          <p className="my-2"><b>Department:</b> {employeeData?.Department || 'Loading...'}</p>
          <p className="my-2"><b>Date of Joining:</b> {employeeData?.DOJ || 'Loading...'}</p>
          <p className="my-2"><b>Designation:</b> {employeeData?.designation || 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
};

export default EmpProfileBox;