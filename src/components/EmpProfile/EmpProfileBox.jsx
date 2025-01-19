import React from 'react'
import person from '../../assets/images/person.jpg'

export const EmpProfileBox = () => {
  return (
    <div className='bg-white p-6 rounded-md shadow-md m-10'>
        <div><h1 className='text-3xl font-bold'>Employee Details</h1></div>
        <div className='flex py-5 items-center align-middle'>
            <div className='flex justify-center w-1/2'>
                <img src={person} className='EmpImage'></img>
            </div>
            <div className='flex flex-col text-left py-5 text-semibold text-lg'>
                <p1 className="my-3">Name:</p1>
                <p2 className="my-3">Employee ID:</p2>
                <p3 className="my-3">Date of birth:</p3>
                <p4 className="my-3">Gender:</p4>
                <p5 className="my-3">Department:</p5>
                <p6 className="my-3">Marital Status:</p6>
            </div>
        </div>
    </div>
  )
}


export default EmpProfileBox;

{/* <div className="profile-box">
            <div className="profile-field">
                <label>Name:</label>
                <span>name</span>
                {/* <span>{employee.name}</span> */}
            // </div>
            // <div className="profile-field">
            //     <label>Email:</label>
            //     <span>name</span>
                {/* <span>{employee.email}</span> */}
            // </div>
            // <div className="profile-field">
            //     <label>Phone:</label>
            //     <span>name</span>
                {/* <span>{employee.phone}</span> */}
            // </div>
            // <div className="profile-field">
            //     <label>Address:</label>
            //     <span>name</span>
                {/* <span>{employee.address}</span> */}
        //     </div>
        // </div> */}