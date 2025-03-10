import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const EditDept = ({ department, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    employeeCount: 0
  });

  useEffect(() => {
    if (department) {
      setFormData({
        name: department.name || '',
        description: department.description || '',
        employeeCount: department.employeeCount || 0
      });
    }
  }, [department]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const deptRef = doc(db, "Department", department.id);
      await updateDoc(deptRef, {
        ...formData,
        updatedAt: new Date().toISOString()
      });
      
      toast.success("Department updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Error updating department: " + error.message);
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-8 max-w-md w-full'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold'>Edit Department</h2>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Employees
            </label>
            <input
              type="number"
              name="employeeCount"
              value={formData.employeeCount}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              min="0"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Update Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDept;