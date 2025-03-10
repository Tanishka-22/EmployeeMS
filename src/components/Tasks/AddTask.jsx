import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),  
    title: '',
    employee: '',
    department: '',
    assignedOn: '',
    deadline: '',
    description: '',
    status: "Pending",  
    createdAt: new Date().toISOString(),
  });

  const handleAddtask = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Tasks"), {
        ...formData,
        id: uuidv4(),  // Generate new ID for each task
        updatedAt: new Date().toISOString()
      });
      
      toast.success(`Task added successfully with ID: ${docRef.id}`);
     
      setFormData({
        id: uuidv4(),  // Reset with new ID
        title: '',
        employee: '',
        department: '',
        assignedOn: '',
        deadline: '',
        description: '',
        status: "Pending",
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      toast.error("Error adding task: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <div className='rounded items-center'>
      <form onSubmit={handleAddtask} className='px-4 items-start justify-between'>
        <div className='flex px-4'>
          <div className='p-4 w-1/2'>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Task Title</h3>
              <input type='text' value={formData.title} onChange={handleChange} 
              name='title' placeholder='Enter Task Title' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Assign to</h3>
              <input type='text' value={formData.employee} onChange={handleChange} 
              name="employee" placeholder='employee name' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Department</h3>
              <input type='text' value={formData.department} onChange={handleChange} 
              name='department' placeholder='design, dev etc.' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Date of assignment</h3>
              <input type='date' value={formData.assignedOn} onChange={handleChange}  
              name='assignedOn' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Date of deadline</h3>
              <input type='date' value={formData.deadline} onChange={handleChange} 
              name='deadline' className='border text-sm py-1 px-2 w-full' />
            </div>
          </div>
          <div className='p-4 w-1/2'>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Description</h3>
              <textarea name='description' value={formData.description} onChange={handleChange} 
              id='' rows='11' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div>
            <button type='submit' className="bg-green-700 mt-4 ml-4 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-800 rounded">Add Task</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;