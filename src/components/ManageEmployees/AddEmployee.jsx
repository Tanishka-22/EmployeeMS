import React from 'react'

export const AddEmployee = () => {
  return (
    <div className='rounded items-center'>
        <form className='px-4 items-start justify-between'>
            <div className='flex px-4'>
                <div className='p-4 w-1/2'>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Employee Name</h3>
                        <input type='text' placeholder='Enter Employee Name' className='border text-sm py-1 px-2 w-full' />
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Employee ID</h3>
                        <input type='text' placeholder='Enter ID' className='border text-sm py-1 px-2 w-full' />
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Gender</h3>
                        <select className='border text-sm py-1 px-2 w-full'>
                            <option value=''>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Designation</h3>
                        <input type='text' placeholder='Enter Designation' className='border text-sm py-1 px-2 w-full' />
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Salary</h3>
                        <input type='number' placeholder='Enter Salary' className='border text-sm py-1 px-2 w-full' />
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Contact Number</h3>
                        <input type='tel' placeholder='Enter Contact Number' className='border text-sm py-1 px-2 w-full' />
                    </div>
                </div>

                <div className='p-4 w-1/2'>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Email</h3>
                        <input type='email' placeholder='Enter Email' className='border text-sm py-1 px-2 w-full' />
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Date of Birth</h3>
                        <input type='date' className='border text-sm py-1 px-2 w-full' />
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Marital Status</h3>
                        <select className='border text-sm py-1 px-2 w-full'>
                            <option value=''>Select Marital Status</option>
                            <option value='single'>Single</option>
                            <option value='married'>Married</option>
                            <option value='divorced'>Divorced</option>
                            <option value='widowed'>Widowed</option>
                        </select>
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Department</h3>
                        <select className='border text-sm py-1 px-2 w-full'>
                            <option value=''>Select Department</option>
                            <option value='hr'>HR</option>
                            <option value='it'>IT</option>
                            <option value='finance'>Finance</option>
                            <option value='marketing'>Marketing</option>
                        </select>
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Password</h3>
                        <input type='hidden' placeholder='Enter Password' className='border text-sm py-1 px-2 w-full' />
                    </div>
                    <div className="p-2">
                        <h3 className='py-1 px-2 text-left text-sm'>Upload Image</h3>
                        <input type='file' className='border text-sm py-1 px-2 w-full' />
                    </div>
                </div>

            </div>
        <div className='p-4'>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add Employee
          </button>
        </div>
      </form>
    </div>
  )
}
