import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import EmployeeViewProfile from './EmployeeViewProfile';
import { EditEmployee } from './EditEmployee';
import { UpdateEmployeeCount } from "../Department/UpdateEmployeeCount";
import { FaTrashAlt } from 'react-icons/fa';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Employees"));
                const employeeData = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    uid: doc.id 
                }));
                setEmployees(employeeData);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };

        fetchEmployees();
    }, []);

    const handleViewProfile = (employee) => {
        setSelectedEmployee(employee);
        setIsViewOpen(true);
    };

    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee);
        setIsEditOpen(true);
    };

    const handleDeleteEmployee = async (employee) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await deleteDoc(doc(db, "Employees", employee.uid));
                
                const updatedEmployees = employees.filter(emp => emp.uid !== employee.uid);
                setEmployees(updatedEmployees);
                
                toast.success("Employee deleted successfully!");
            } catch (error) {
                toast.error("Error deleting employee: " + error.message);
            }
        }
    };

    return (
        <div className="w-full m-8">
        <table className='w-full'>
            <thead>
                <tr className='tableHead py-2'>
                    <th>S.No</th>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                <tr className='tableRow' key={employee.uid}>
                    <td>{index + 1}</td>
                    <td>{employee.empID}</td>
                    <td>{employee.name}</td>
                    <td>{employee.DOB}</td>
                    <td>{employee.Department}</td>
                    <td>
                        <button onClick={() => handleViewProfile(employee)} className='bg-blue-500 py-1 px-3.5 mx-2 rounded'>View</button>
                        <button onClick={() => handleEditEmployee(employee)} className='bg-green-500 py-1 px-3.5 mx-2 rounded'>Edit</button>
                        <button className='bg-yellow-500 py-1 px-3.5 mx-2 rounded'>Salary</button>
                        <button className='bg-red-500 py-1 px-3.5 mx-2 rounded'>Leave</button>
                        <button onClick={() => handleDeleteEmployee(employee)} className='bg-gray-600 opacity-50 border-solid py-2 px-2 mx-2 rounded text-white hover:bg-black-700 hover:opacity-100'
                        ><FaTrashAlt/></button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        {isViewOpen && (
            <EmployeeViewProfile 
                employee={selectedEmployee} 
                onClose={() => setIsViewOpen(false)}
            />
        )}
        {isEditOpen && (
            <EditEmployee 
                employee={selectedEmployee} 
                onClose={() => setIsEditOpen(false)}
            />
        )}
        </div> 
    );
};

export default EmployeeList;