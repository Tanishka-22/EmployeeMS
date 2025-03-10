import React, { useState, useEffect} from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import TaskCard from './TaskCard';

export const AllTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try{
        const querySnapshot = await getDocs(collection(db, "Tasks"));
        const taskData = querySnapshot.docs.map((doc) => ({
          id: doc.uid,
          ...doc.data(),
        }));
        setTasks(taskData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <div className='items-center justify-between p-8'>
        <div className='flex text-semibold justify-between w-full px-5 py-3'>
          <p>Employee Name</p>
          <p>Title</p>
          <p>Status</p>
        </div>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            employee={task.employee}
            title={task.title}
            status={task.status}
            assignedOn={task.assignedOn}
            deadline={task.deadline}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;