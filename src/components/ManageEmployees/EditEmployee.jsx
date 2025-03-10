import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const EditEmployee = ({ employee, onClose }) => {
  const [formData, setFormData] = useState({
    name: employee.name || '',
    empID: employee.empID || '',
    Gender: employee.Gender || '',  
    designation: employee.designation || '',
    salary: employee.salary || '',
    contactNumber: employee.contactNumber || '',
    email: employee.email || '',
    DOB: employee.DOB || '',
    DOJ: employee.DOJ || '',
    MaritalStatus: employee.MaritalStatus || '', 
    Department: employee.Department || '',
    password: employee.password || 'A-employee',
    role: employee.role || 'user'
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        ...employee,
        password: employee.password || 'A-employee',
        role: employee.role || 'user'
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditEmployee = async (e) => {
    e.preventDefault();
    try {
      if (!employee?.uid) {
        throw new Error('Employee ID not found');
      }
      const employeeRef = doc(db, "Employees", employee.uid);
      await updateDoc(employeeRef, formData);
      toast.success("Employee updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Error updating employee: " + error.message);
    }
  };

   return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-8 max-w-4xl max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold'>Edit Employee Details</h2>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            ✖
          </button>
        </div>
        <form onSubmit={handleEditEmployee} className='px-4 items-start justify-between'>
          <div className='flex px-4'>
            <div className='p-4 w-1/2'>
                <div className="p-2">
                    <h3 className='py-1 px-2 mb-1 text-left text-sm'>User ID</h3>
                    <textbox 
                    type='text'
                    name="uid"
                    value={formData.uid}
                    className='border text-sm py-2 px-2 w-full text-sm'
                    required
                    >{employee.uid}</textbox>
                </div>
                <div className="p-2">
                    <h3 className='py-1 px-2 text-left text-sm'>Employee Name</h3>
                    <input 
                    type='text'
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="Gender"
                    value={formData.Gender}
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
                        name="MaritalStatus"
                        value={formData.MaritalStatus}
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

          <div className='p-4 flex justify-end gap-4'>
            <button 
              type='button' 
              onClick={onClose}
              className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
              Cancel
            </button>
            <button 
              type='submit' 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Update Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;