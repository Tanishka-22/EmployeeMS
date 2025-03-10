import React from 'react';
import person from '../../assets/images/person.jpg'

const EmployeeViewProfile = ({ employee, onClose }) => {
    return (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white p-6 rounded-lg shadow-lg relative w-[500px]'>
          <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl  font-bold'>Employee Details</h1>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 text-xl"
            >
              ✖
            </button>
          </div>
  
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex m-4 justify-center '>
               <img src={person} alt="Employee" className='w-32 h-32 rounded-full object-cover'/>
            </div>
            <div className='flex flex-col text-left space-y-3'>
                <p className="text-gray-700"><span className="font-semibold">Employee ID:</span> {employee.empID}</p>
                <p className="text-gray-700"><span className="font-semibold">Name:</span> {employee.name}</p>
                <p className="text-gray-700"><span className="font-semibold">Date of birth:</span> {employee.DOB}</p>
                <p className="text-gray-700"><span className="font-semibold">Gender:</span> {employee.Gender}</p>
                <p className="text-gray-700"><span className="font-semibold">Department:</span> {employee.Department}</p>
                <p className="text-gray-700"><span className="font-semibold">Date of Joining:</span> {employee.DOJ}</p>
                <p className="text-gray-700"><span className="font-semibold">Marital Status:</span> {employee.MaritalStatus}</p>
            </div>
        </div>
      </div>
      </div>
    );
  };

export default EmployeeViewProfile;

// const EmployeeViewProfile = ({onClose}) => {
//     return (
//       <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
//         <div className='bg-white p-6 rounded-lg shadow-lg relative w-[500px]'>
//           <div className='flex justify-between items-center mb-4'>
//             <h1 className='text-2xl  font-bold'>Employee Details</h1>
//             <button
//               onClick={onClose}
//               className="text-gray-600 hover:text-gray-900 text-xl"
//             >
//               ✖
//             </button>
//           </div>
  
//           <div className='flex flex-col md:flex-row gap-6'>
//             <div className='flex justify-center mt-4'>
//               <img src={person} alt="Employee" className='w-32 h-32 rounded-full object-cover'/>
//             </div>
//             <div className='flex flex-col text-left space-y-3'>
//               <p className="text-gray-700"><span className="font-semibold">Name:</span> {Employee.name}</p>
//               <p className="text-gray-700"><span className="font-semibold">Employee ID:</span> {Employee.empID} </p>
//               <p className="text-gray-700"><span className="font-semibold">Date of birth:</span> {Employee.DOB} </p>
//               <p className="text-gray-700"><span className="font-semibold">Gender:</span> {Employee.Gender} </p>
//               <p className="text-gray-700"><span className="font-semibold">Department:</span> {Employee.Department} </p>
//               <p className="text-gray-700"><span className="font-semibold">Date of Joining:</span> {Employee.DOJ} </p>
//               <p className="text-gray-700"><span className="font-semibold">Marital Status:</span> {Employee.MaritalStatus} </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };