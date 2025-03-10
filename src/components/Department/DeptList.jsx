import React, { useState, useEffect} from 'react';
import { db } from '../firebase';  
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import EditDept from './EditDept';

export const DeptList = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [departments, setDepartments] = useState([]);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedDept, setSelectedDept] = useState(null);
    
    const toggleDescription = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleEdit = (dept) => {
        setSelectedDept(dept);
        setIsEditOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "Department", id));
            toast.success("Department deleted successfully!");
            // Refresh the list
            fetchDepartments();
        } catch (error) {
            toast.error("Error deleting department: " + error.message);
        }
    };

    const fetchDepartments = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Department"));
            const deptData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDepartments(deptData);
        } catch (error) {
            toast.error("Error fetching departments: " + error.message);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return (
        <>
            <table className="w-full m-8 table-auto">
                <thead>
                    <tr className='tableHead py-2'>
                        <th>S.No</th>
                        <th>Department Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((dept, index) => (
                        <React.Fragment key={dept.id}>
                            <tr className='w-full tableRow'>
                                <td>{index + 1}</td>
                                <td>{dept.name}</td>
                                <td>
                                    <button 
                                        className='bg-green-500 py-1 px-3.5 mx-2 rounded text-white' 
                                        onClick={() => toggleDescription(dept.id)}
                                    >
                                        {expandedId === dept.id ? 'Hide' : 'View'}
                                    </button>
                                    <button 
                                        className='bg-blue-500 py-1 px-3.5 mx-2 rounded text-white'
                                        onClick={() => handleEdit(dept)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className='bg-red-500 py-1 px-3.5 mx-2 rounded text-white'
                                        onClick={() => handleDelete(dept.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            {expandedId === dept.id && (
                                <tr className='w-full'>
                                    <td colSpan="3">
                                        <div className='bg-gray-50 p-4 rounded-lg shadow-inner'>
                                            <p className="mb-2">No. of employees: {dept.employeeCount || 0}</p>
                                            <p>Description: {dept.description || 'No description available'}</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            {isEditOpen && selectedDept && (
                <EditDept 
                    department={selectedDept} 
                    onClose={() => {
                        setIsEditOpen(false);
                        setSelectedDept(null);
                        fetchDepartments();
                    }}
                />
            )}
        </>
    );
};

export default DeptList;