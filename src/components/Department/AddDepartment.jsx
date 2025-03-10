import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";

export const AddDepartment = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: '',
    description: '',
    employeeCount: 0,
    createdAt: new Date().toISOString()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEmployeeCount = async (deptName) => {
    try{
      const employeeRef = collection(db, "Employee");
      const q = query(employeeRef, where("Department", "==", deptName));
      const querySnapshot = await getDocs(q);
      return querySnapshot.size;
    } catch (error) {
      toast.error("Error fetching employee count: " + error.message);
      return 0;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentCount = await handleEmployeeCount(formData.name);
      
      const docRef = await addDoc(collection(db, "Department"), {
        ...formData,
        employeeCount: currentCount,
        updatedAt: new Date().toISOString()
      });
      
      toast.success("Department added successfully!");
      
      setFormData({
        id: uuidv4(),
        name: '',
        description: '',
        employeeCount: 0,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      toast.error("Error adding department: " + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700">Department Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Department
        </button>
      </form>
    </div>
  );
};
