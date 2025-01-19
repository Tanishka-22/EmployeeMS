import React from 'react'

export const AddDepartment = () => {
  return (
    <div className='mt-5 items-center justify-center w-2/5'>
        <form className='px-6 w-full items-center jestify-center'>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Department</h3>
              <input type='text' placeholder='design, dev etc.' className='border text-sm py-1 px-2 w-full' />
            </div>
            <div className="p-2">
              <h3 className='py-1 px-2 text-left text-sm'>Description</h3>
              <textarea name='' id='' rows='11' className='border text-sm py-1 px-2 w-full' />
            </div>
            <button className="bg-green-700 mt-4 ml-4 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-800 rounded">Add Department</button>
        </form>
    </div>
  )
}
