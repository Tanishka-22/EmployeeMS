import React from 'react';

const EmployeeList = () => {
    const employees = [
        {
            id: 1,
            image: ('src/assets/images/user.png.jpg'),
            name: 'John Doe',
            dob: '1990-01-01',
            department: 'Engineering',
        },
        {
            id: 2,
            image: ('src/assets/images/user.png.jpg'),
            name: 'Jane Smith',
            dob: '1985-05-15',
            department: 'Marketing',
        },
    ];
    return (
        <table className="w-full m-8">
            <thead>
                <tr className='tableHead py-2'>
                    <th>S.No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                <tr className='tableRow' key={employee.id}>
                    <td>{index + 1}</td>
                    <td><img src={employee.image} alt={employee.name} width="50" height="50" /></td>
                    <td>{employee.name}</td>
                    <td>{employee.dob}</td>
                    <td>{employee.department}</td>
                    <td>
                        <button className='bg-blue-500 py-1 px-3.5 mx-2 rounded'>View</button>
                        <button className='bg-green-500 py-1 px-3.5 mx-2 rounded'>Edit</button>
                        <button className='bg-yellow-500 py-1 px-3.5 mx-2 rounded'>Salary</button>
                        <button className='bg-red-500 py-1 px-3.5 mx-2 rounded'>Leave</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default EmployeeList;

// const employees = [
//     {
//         id: 1,
//         image: 'path/to/image1.jpg',
//         name: 'John Doe',
//         dob: '1990-01-01',
//         department: 'Engineering',
//     },
//     {
//         id: 2,
//         image: 'path/to/image2.jpg',
//         name: 'Jane Smith',
//         dob: '1985-05-15',
//         department: 'Marketing',
//     },
    // Add more employees as needed
//];

// return (
//     <table>
//         
//         <tbody>
//             {employees.map((employee, index) => (
//                 <tr key={employee.id}>
//                     <td>{index + 1}</td>
//                     <td><img src={employee.image} alt={employee.name} width="50" height="50" /></td>
//                     <td>{employee.name}</td>
//                     <td>{employee.dob}</td>
//                     <td>{employee.department}</td>
//                     <td>
//                         <button>View</button>
//                         <button>Edit</button>
//                         <button>Salary</button>
//                         <button>Leave</button>
//                     </td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// );