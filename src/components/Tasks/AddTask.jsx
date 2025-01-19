import React from 'react';

const AddTask = () => {
  return (
    <div className='rounded items-center'>
      <form className='px-4 items-start justify-between'>
        <div className='flex px-4'>
          <div className='p-4 w-1/2'>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Task Title</h3>
              <input type='text' placeholder='Enter Task Title' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Assign to</h3>
              <input type='text' placeholder='employee name' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Department</h3>
              <input type='text' placeholder='design, dev etc.' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Date of assignment</h3>
              <input type='date' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Date of deadline</h3>
              <input type='date' className='border text-sm py-1 px-2 w-full' />
            </div>
          </div>
          <div className='p-4 w-1/2'>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Description</h3>
              <textarea name='' id='' rows='11' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div>
            <button className="bg-green-700 mt-4 ml-4 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-800 rounded">Add Task</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;