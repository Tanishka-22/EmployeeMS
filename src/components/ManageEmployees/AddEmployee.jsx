import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { UpdateEmployeeCount } from "../Department/UpdateEmployeeCount";

export const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    empID: '',
    gender: '',
    designation: '',
    salary: '',
    contactNumber: '',
    email: '',
    DOB: '',
    maritalStatus: '',
    Department: '',
    password: 'A-employee',
    role: 'user'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Employees"), formData);
      
      await UpdateEmployeeCount(formData.Department);
      
      toast.success("Employee added successfully!");
     
      setFormData({
        uid: '',
        name: '',
        empID: '',
        gender: '',
        designation: '',
        salary: '',
        contactNumber: '',
        email: '',
        DOB: '',
        DOJ: '',
        maritalStatus: '',
        Department: '',
        password: 'A-employee',
        role: 'user'
      });
    } catch (error) {
      toast.error("Error adding employee: " + error.message);
    }
  };

  return (
    <div className='rounded items-center'>
      <form onSubmit={handleAddEmployee} className='px-4 items-start justify-between'>
        <div className='flex px-4'>
          <div className='p-4 w-1/2'>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>User ID</h3>
              <input 
                type='text'
                name="uid"
                value={formData.uid}
                onChange={handleChange}
                placeholder="Enter Employee's User ID"
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Employee Name</h3>
              <input 
                type='text'
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter Employee Name'
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Employee ID</h3>
              <input 
                type='text'
                name="empID"
                value={formData.empID}
                onChange={handleChange}
                placeholder='Enter ID'
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Gender</h3>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className='border text-sm py-1 px-2 w-full'
                required
              >
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Designation</h3>
              <input 
                type='text'
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder='Enter Designation'
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Salary</h3>
              <input 
                type='number'
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder='Enter Salary'
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
          </div>

          <div className='p-4 w-1/2'>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Email</h3>
              <input 
                type='email'
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Email'
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Contact Number</h3>
              <input 
                type='tel'
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder='Enter Contact Number'
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Date of Birth</h3>
              <input 
                type='date'
                name="DOB"
                value={formData.DOB}
                onChange={handleChange}
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Date of Joining</h3>
              <input 
                type='date'
                name="DOJ"
                value={formData.DOJ}
                onChange={handleChange}
                className='border text-sm py-1 px-2 w-full'
                required
              />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Marital Status</h3>
              <select 
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className='border text-sm py-1 px-2 w-full'
                required
              >
                <option value=''>Select Marital Status</option>
                <option value='Single'>Single</option>
                <option value='Married'>Married</option>
                <option value='Divorced'>Divorced</option>
                <option value='Widowed'>Widowed</option>
              </select>
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Department</h3>
              <select 
                name="Department"
                value={formData.Department}
                onChange={handleChange}
                className='border text-sm py-1 px-2 w-full'
                required
              >
                <option value=''>Select Department</option>
                <option value='HR'>HR</option>
                <option value='IT'>IT</option>
                <option value='Finance'>Finance</option>
                <option value='Marketing'>Marketing</option>
              </select>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};